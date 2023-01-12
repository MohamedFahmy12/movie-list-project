import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import logo from '../images/logo.png';
import { getAllMovie, searchMovies } from '../Redux/actions/movieActions';

const NavBar = () => {
    const dispatch = useDispatch();
    const onSearch = (word) => {
        search(word);
    };
    const search = (word) => {
            if (word === '') {
                dispatch(getAllMovie(1))
                return;
            }
            dispatch(searchMovies(word,1))
    };
    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2 ">
                    <Col xs="2" lg="1">
                        <a href="/">
                            <img className="logo" src={logo} alt="dfs" />
                        </a>
                    </Col>
                    <Col xs="10" lg="11" className=" d-flex align-items-center">
                        <div className="search  w-100">
                            <i className="fa fa-search"></i>
                            <input
                                onChange={(e) => onSearch(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="ابحث"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;
