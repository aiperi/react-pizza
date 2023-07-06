import React from 'react';
import styles from './pagination.module.scss'
import ReactPaginate from "react-paginate";

// const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
// };




const Pagination = () => {
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event)=>console.log(event)}
                pageRangeDisplayed={8}
                pageCount={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;