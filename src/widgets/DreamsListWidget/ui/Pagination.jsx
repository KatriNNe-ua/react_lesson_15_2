export default function Pagination({ page, setPage, hasMore }) {
  return (
    <div className="pagination dream__pagination">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className="pagination__btn btn"
      >
        ◀ Prev
      </button>
      <span className="pagination__page">{page}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasMore}
        className="pagination__btn btn"
      >
        Next ▶
      </button>
    </div>
  );
}
