export function paginateJournal(entries, pageSize) {
  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new RangeError('pageSize must be a positive integer');
  }

  const pageCount = Math.ceil(entries.length / pageSize);
  return Array.from({ length: pageCount }, (_, index) => ({
    cursor: String(index + 1),
    nextCursor: index + 1 < pageCount ? String(index + 2) : null,
    entries: entries.slice(index * pageSize, (index + 1) * pageSize),
  }));
}
