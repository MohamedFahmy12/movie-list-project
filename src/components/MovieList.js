import React from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';
import Paginate from './Pagination';

const MovieList = ({ movies,pageCount,handlePagination }) => {
    return (
        <Row className="mt-3 d-flex flex-wrap">
            {movies.length > 0 ? (
                movies.map((item) => {
                    return <MovieCard key={item.id} movie={item} />;
                })
            ) : (
                <h2 className="text-center p-5">لا يوجد افلام</h2>
            )}
            <Paginate pageCount={pageCount} handlePagination={handlePagination} />

        </Row>
    );
};

export default MovieList;
