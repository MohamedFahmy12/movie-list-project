import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../Redux/actions/movieActions';
import MovieCard from './MovieCard';
import Paginate from './Pagination';

const MovieList = ({ pageCount, handlePagination }) => {
    const [movies, setmovies] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovie(1));
    },[]);

    const data = useSelector((state) => state);
    useEffect(() => {
        if (data !== undefined && data.movies.length > 0)
            setmovies(data.movies)
    }, [data]);
    return (
        <Row className="mt-3 d-flex flex-wrap">
            {movies.length > 0 ? (
                movies.map((item) => {
                    return <MovieCard key={item.id} movie={item} />;
                })
            ) : (
                <h2 className="text-center p-5">لا يوجد افلام</h2>
            )}
            <Paginate/>

        </Row>
    );
};

export default MovieList;
