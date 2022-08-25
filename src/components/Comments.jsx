import { fetchComments } from "../apiCalls/fetchComments";
import { useState, useEffect } from "react";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  });

  return (
    <div className="article-comments">
      <h3>All comments</h3>
      {comments.map((comment) => {
        return (
          <div className="single-comment">
            <h4>{comment.author}:</h4>
            <span>Posted at: {comment.created_at}</span>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};
