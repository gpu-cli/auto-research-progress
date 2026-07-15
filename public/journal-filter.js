const buttons = [...document.querySelectorAll('[data-filter]')];
const rows = [...document.querySelectorAll('[data-kind]')];

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
  const filter = button.dataset.filter;
  let visible = 0;
  rows.forEach((row) => {
    const show = filter === 'all' || row.dataset.kind === filter;
    row.hidden = !show;
    if (show) visible += 1;
  });
  const empty = document.querySelector('.empty-filter');
  if (empty) empty.hidden = visible !== 0;
}));