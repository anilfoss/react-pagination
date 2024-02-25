import React, { useState } from "react";
import Pagination from "./Pagination";

const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
}));

const PaginationTest = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentListOfItems = dummyData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage);
    };

    return (
        <>
            <ul className="product-list">
                {currentListOfItems.map((item, index) => {
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>
            <br />
            <br />
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length / itemsPerPage)}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default PaginationTest;
