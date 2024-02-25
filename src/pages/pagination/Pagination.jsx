import React from "react";

const Pagination = ({ currentPage, totalPages = 10, handlePageChange }) => {
    const pages = [];

    const generateTotalNumberOfPages = () => {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <>
            <div className="pagination text-center">
                <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {generateTotalNumberOfPages().map((page, index) => {
                    return (
                        <button
                            key={index}
                            className={`pagination-btn ${
                                currentPage === page ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Pagination;
