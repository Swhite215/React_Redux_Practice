import { ADD_ARTICLE } from "../constants/action-types";
import { DELETE_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({type: ADD_ARTICLE, payload: article});
export const deleteArticle = articleId => ({type: DELETE_ARTICLE, id: articleId });

