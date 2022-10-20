import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className="mt-3 d-flex flex-wrap">
            {movies.length > 0 ? (
                movies.map((item) => {
                    return <MovieCard key={item.id} movie={item} />;
                })
            ) : (
                <h2 className="text-center p-5">لا يوجد افلام</h2>
            )}
        </div>
    );
};

export default MovieList;
