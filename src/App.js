import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { _apiKey, _baseUrl } from './core/Constants';

function App() {
    const [movies, setmovies] = useState([]);
    const getAllMovies = async () => {
        var res = await axios.get(
            _baseUrl +
                'movie/popular?api_key=' +
                _apiKey +
                '&language=ar&page=1'
        );
        setmovies(res.data.results);
    };
    const search = async (word) => {
        if (word === '') {
            getAllMovies();
            return;
        }
        var res = await axios.get(
            _baseUrl +
                'search/movie/?api_key=' +
                _apiKey +
                '&query=' +
                word +
                '&language=ar'
        );
        setmovies(res.data.results);
    };
    useEffect(() => {
        getAllMovies();
    }, []);
    return (
        <div className="font color-body">
            <NavBar search={search} />
            <Container>
                <MovieList movies={movies} />
            </Container>
        </div>
    );
}

export default App;
