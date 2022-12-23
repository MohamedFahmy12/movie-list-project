import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { _apiKey, _baseUrl } from './core/Constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';
function App() {
    const [count, setCount] = useState(0);
    const [searchword, setSearch] = useState('')
    const [movies, setmovies] = useState([]);
    const handlePagination = (pageNumber) => {
        if (searchword === '')
            getAllMovies(pageNumber);
        else
            search(searchword, pageNumber)
    }
    const getAllMovies = async (pageNumber) => {
        debugger;
        var res = await axios.get(
            _baseUrl +
            'movie/popular?api_key=' +
            _apiKey +
            '&language=ar&page=' + pageNumber
        );
        setmovies(res.data.results);
        setCount(res.data.total_pages);
    };
    const search = async (word, pageNumber = 1) => {
        setSearch(word);
        if (word === '') {
            getAllMovies(pageNumber);
            return;
        }
        var res = await axios.get(
            _baseUrl +
            'search/movie/?api_key=' +
            _apiKey +
            '&query=' +
            word +
            '&language=ar&page=' + pageNumber
        );
        setmovies(res.data.results);
        setCount(res.data.total_pages);
    };
    useEffect(() => {
        getAllMovies();
    }, []);
    return (
        <div className="font color-body">
            <NavBar search={search} />
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MovieList movies={movies} pageCount={count} handlePagination={handlePagination} />} />
                        <Route path='movie/:id' element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
