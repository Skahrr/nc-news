import { Link } from "react-router-dom";

export const ArticleDisplay = ({ article }) => {
  return (
    <article>
      <div className="title"><Link to={`/articles/${article.topic}/${article.article_id}`}>{article.title}</Link></div>
      <div className="information">
        <div className="author">Written by: {article.author}</div>
        <div className="created_at">{article.created_at}</div>
        <div className="comment_count">Comments: {article.comment_count}</div>
      </div>
    </article>
  );
};
