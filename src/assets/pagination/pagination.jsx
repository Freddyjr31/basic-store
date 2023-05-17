export default function Paginations ({ productsPerPage, page, setPage, totalProducts }) {
  const pageNumbers = []
  const limit = Math.ceil(totalProducts / productsPerPage)
  for (let item = 1; item <= limit; item++) {
    pageNumbers.push(item)
  }
  const onPrevious = () => {
    setPage(page - 1)
  }
  const onNext = () => {
    setPage(page + 1)
  }
  const onSelectedPage = (n) => {
    setPage(n)
  }
  return (
    <>
      <div className='row m-3 justify-content-center'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>

            <li className='page-item'>
              <a onClick={onPrevious} className={`page-link ${page === 1 ? 'disabled' : ''}`} href='#' aria-label='Previous'>
                <span aria-hidden='true'>&laquo;</span>
              </a>
            </li>

            {pageNumbers.map((e) => (
              <li key={e} className='page-item'><a onClick={() => onSelectedPage(e)} className={`page-link ${e === page ? 'active' : ''}`} href='#'>{e}</a></li>
            ))}

            <li className='page-item'>
              <a onClick={onNext} className={`page-link ${page >= pageNumbers.length ? 'disabled' : ''}`} href='#' aria-label='Next'>
                <span aria-hidden='true'>&raquo;</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}
