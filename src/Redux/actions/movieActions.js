import axios from "axios";
import { _apiKey, _baseUrl } from "../../core/Constants";
import { moviesType } from "../types/moviesTypes"

export const getAllMovie = (pageNumber) => {
    return async (dispatch) => {
        var res = await axios.get(
            _baseUrl +
            'movie/popular?api_key=' +
            _apiKey +
            '&language=ar&page=' + pageNumber
        );
        dispatch({ type: moviesType[0], data: res.data.results, pages: 500,searchWord:'' ,pageNumber:pageNumber});
    }
}
export const searchMovies = (word, pageNumber) => {
    return async (dispatch) => {
        var res = await axios.get(
            _baseUrl +
            'search/movie/?api_key=' +
            _apiKey +
            '&query=' +
            word +
            '&language=ar&page=' + pageNumber
        );
        dispatch({ type: moviesType[1], data: res.data.results, pages: res.data.total_pages,searchWord:word,pageNumber:pageNumber })
    }

}