import { Link } from "react-router-dom";

export const ArticleDisplay = ({ article }) => {
  return (
    <article>
      <div className="title"><Link to={`/articles/${article.topic}/${article.article_id}`}>{article.title}</Link></div>
      <div className="information">
        <p className="author">Written by: {article.author}</p>
        <p className="created_at">{article.created_at}</p>
        <p className="comment_count">Comments: {article.comment_count}</p>
      </div>
    </article>
  );
};
