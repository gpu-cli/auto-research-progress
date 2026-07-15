const buttons = [...document.querySelectorAll('[data-filter]')];
const list = document.querySelector('.journal-list');
const template = document.querySelector('#journal-row-template');
const sentinel = document.querySelector('[data-journal-sentinel]');
const loadButton = document.querySelector('.journal-load-button');
const loadStatus = document.querySelector('.journal-load-status');
const empty = document.querySelector('.empty-filter');

if (list && template && sentinel && loadButton && loadStatus) {
  let nextCursor = list.dataset.nextCursor || null;
  let currentFilter = 'all';
  let loading = false;
  const total = Number(list.dataset.total || 0);

  const rows = () => [...list.querySelectorAll('.journal-row')];

  const setText = (row, field, value) => {
    const target = row.querySelector(`[data-field="${field}"]`);
    if (target) target.textContent = value;
  };

  const createRow = (entry) => {
    const row = template.content.firstElementChild.cloneNode(true);
    row.dataset.kind = entry.kind;
    const link = row.querySelector('[data-field="url"]');
    if (link) link.href = entry.url;
    setText(row, 'index', entry.index);
    setText(row, 'kind', entry.kind);
    setText(row, 'status', entry.status);
    setText(row, 'title', entry.title);
    setText(row, 'summary', entry.summary);
    const time = row.querySelector('[data-field="date"]');
    if (time) {
      time.textContent = entry.dateShort;
      if (entry.date) time.dateTime = entry.date;
    }
    const imageSlot = row.querySelector('[data-field="image-slot"]');
    if (imageSlot && entry.image) {
      const image = document.createElement('img');
      image.src = entry.image;
      image.alt = '';
      image.loading = 'lazy';
      imageSlot.replaceWith(image);
    }
    return row;
  };

  const applyFilter = () => {
    let visible = 0;
    rows().forEach((row) => {
      const show = currentFilter === 'all' || row.dataset.kind === currentFilter;
      row.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0 || Boolean(nextCursor);
  };

  const updateStatus = (message) => {
    const loaded = rows().length;
    loadStatus.textContent = message ?? (nextCursor ? `${loaded} of ${total} entries loaded` : `All ${loaded} entries loaded`);
    loadButton.hidden = !nextCursor;
  };

  const loadNext = async () => {
    if (loading || !nextCursor) return false;
    const cursor = nextCursor;
    loading = true;
    list.setAttribute('aria-busy', 'true');
    loadButton.disabled = true;
    updateStatus('Loading more research…');

    try {
      const response = await fetch(`/journal/${encodeURIComponent(cursor)}.json`);
      if (!response.ok) throw new Error(`Journal manifest returned ${response.status}`);
      const page = await response.json();
      const fragment = document.createDocumentFragment();
      page.entries.forEach((entry) => fragment.append(createRow(entry)));
      list.append(fragment);
      nextCursor = page.nextCursor;
      list.dataset.nextCursor = nextCursor ?? '';
      applyFilter();
      updateStatus();
      return true;
    } catch (error) {
      console.error('Unable to load the next journal page.', error);
      updateStatus('Loading paused. Use “Load more” to retry.');
      return false;
    } finally {
      loading = false;
      list.setAttribute('aria-busy', 'false');
      loadButton.disabled = false;
    }
  };

  const loadAll = async () => {
    while (nextCursor) {
      const loaded = await loadNext();
      if (!loaded) break;
    }
  };

  buttons.forEach((button) => button.addEventListener('click', async () => {
    buttons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
    currentFilter = button.dataset.filter || 'all';
    if (currentFilter !== 'all') await loadAll();
    applyFilter();
  }));

  loadButton.addEventListener('click', loadNext);

  if ('IntersectionObserver' in window && nextCursor) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) loadNext();
      if (!nextCursor) observer.disconnect();
    }, { rootMargin: '700px 0px' });
    observer.observe(sentinel);
  }

  applyFilter();
  updateStatus();
}
