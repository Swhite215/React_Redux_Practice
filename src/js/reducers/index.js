import { ADD_ARTICLE } from "../constants/action-types";
import { DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
        //EXample #1: Impure function, alters the original array
            // state.articles.push(action.payload);
            // return state;
        //Example #2: Pure function
            // return {...state, articles: state.articles.concat(action.payload)};
        //Example #3: Pure function with spread operator
            return {articles: [...state.articles, action.payload]};
        case DELETE_ARTICLE:
            return {articles: state.articles.filter(article => article.id !== action.id) }
        default:
            return state
    }
};

export default rootReducer;