import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleArticle } from "./apiCalls/fetchSingleArticle";
import {BiUpvote} from "react-icons/bi"


export const SingleArticle = () => {
  let { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetchSingleArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);
  {console.log(article);}
  return (
    <main>
      <div className="title-single-article">{article.title}</div>
      <div className="article-body">{article.body}</div>
      <div className="information">
        <div className="author">Written by: {article.author}</div>
        <div className="created_at">{article.created_at}</div>
        <div className="comment_count">Comments: {article.comment_count}</div>
      </div>
      <div className="votes">
        <label htmlFor="votes">Votes: {article.votes}</label>
        <button id="votes"><BiUpvote/></button>
      </div>
      <div className="btn-back">
        <button><Link to={`/articles/${article.topic}`}>Back</Link> </button>
      </div>
    </main>
  );
};
