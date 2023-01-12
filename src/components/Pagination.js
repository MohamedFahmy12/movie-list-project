import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie, searchMovies } from "../Redux/actions/movieActions";
const Paginate = () => {

    const handlePageClick = (data) => {
        handlePagination(data.selected + 1);
    }
    const [pageCount, setPageCount] = useState(500);
    const [pageNo, setPageNo] = useState(0);
    const [searchword, setsearchword] = useState('');
    const dispatch = useDispatch();
    const dataPages = useSelector(state => state);
    useEffect(() => {
        if (dataPages !== undefined) {
            setPageCount(dataPages.pageCount);
            setsearchword(dataPages.searchWord)
            setPageNo(dataPages.pageNumber-1)
        }
    }, [dataPages])
    const handlePagination = (pageNumber) => {
        if (searchword === '')
            dispatch(getAllMovie(pageNumber));
        else
            dispatch(searchMovies(searchword, pageNumber));
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            forcePage={pageNo}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="السابق"
            renderOnZeroPageCount={null}
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}
export default Paginate;