import { moviesType } from "../types/moviesTypes";


const moviesReducer = (state = { movies: [], pageCount: 500,searchWord:'',pageNumber:0 }, action) => {
    switch (action.type) {
        case moviesType[0]:
        case moviesType[1]:
            return { movies: action.data, pageCount: action.pages,searchWord:action.searchWord,pageNumber:action.pageNumber }
        default:
            break;
    }
}

export default moviesReducer;