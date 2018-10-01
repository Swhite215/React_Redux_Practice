import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapStateToProps = state => {
    return {articles : state.articles};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: articleId => dispatch(deleteArticle(articleId))
  };
};

const ConnectedList = ({ articles, deleteArticle }) => (
    <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
        <button onClick={() => deleteArticle(el.id)}>X</button>
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;