
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() { 
    return (
        <div className="font color-body">
            <NavBar />
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MovieList />} />
                        <Route path='movie/:id' element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;



    // const pages = useSelector(state => state);
    // useEffect(() => {
    //     if (pages != undefined)
    //         setCount(pages.pageCount);
    // }, [pages])