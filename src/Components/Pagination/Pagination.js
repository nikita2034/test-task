import React from "react";
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'

function Pagination({currentPage ,pageCount, onChangePage}){

    return(
        <ReactPaginate
        className={styles.root}
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event)=>onChangePage(event.selected+1)}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          previousLabel="<"
          forcePage={currentPage-1}
          renderOnZeroPageCount={null}
        />
    )
}

export default Pagination