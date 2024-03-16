import React from 'react';

const Pagination = ({
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Check if the current page is greater than the total number of pages
   

    return (
        <>
            <div className='w-60 mx-auto mt-4'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination pg-blue">
                        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
                            <a className="page-link" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>

                        {pageNumbers.map((page, index) => (
                            <li className={`page-item ${currentPage === page ? "active" : ""}`} key={index}>
                                <a className="page-link" onClick={() => onPageChange(page)}>
                                    {page}
                                </a>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}>
                            <a className="page-link" aria-label="Next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;
