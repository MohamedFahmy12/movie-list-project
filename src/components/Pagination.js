import React from "react";
import ReactPaginate from 'react-paginate';
const Paginate = ({pageCount,handlePagination}) => {

    const handlePageClick = (data)=>{
        handlePagination(data.selected+1);  
    }
        
    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        forcePage = {0}
        marginPagesDisplayed = {2}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName = {"page-item"}
        pageLinkClassName = {"page-link"}
        previousClassName = {"page-item"}
        nextClassName = {"page-item"}
        previousLinkClassName = {"page-link"}
        nextLinkClassName = {"page-link"}
        breakClassName = {"page-item"}
        breakLinkClassName = {"page-link"}
        activeClassName = {"active"}
      />
    )
}
export default Paginate;