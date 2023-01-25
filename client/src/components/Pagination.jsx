const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    console.log(currentPage)
    return (
        <div className="btn-group bg-transparent">
            <button className="btn-ghost btn-md btn" onClick={prevPage}>
                «
            </button>
            {Array.from({ length: numberOfPages }).map((_, index) => (
                <button
                    key={index}
                    className={
                        'btn-ghost btn-md btn' +
                        (index + 1 === currentPage ? ' text-red-500' : '')
                    }
                    onClick={() => {
                        if (index + 1 !== currentPage) {
                            setCurrentPage(index + 1)
                        }
                    }}
                >
                    {index + 1}
                </button>
            ))}
            <button className="btn-ghost btn-md btn" onClick={nextPage}>
                »
            </button>
        </div>
    )
}

export default Pagination
// text-red-500
