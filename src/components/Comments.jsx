import { fetchComments } from "../apiCalls/fetchComments";
import { useState, useEffect, useContext } from "react";
import { NewComment } from "./NewComment";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../apiCalls/deleteComment";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const handleClick = (comment_id) => {
    setErrMsg(false);
    setIsDeleted(true);
    deleteComment(comment_id)
      .then(() => {
        setIsDeleted(false);
      })
      .catch((err) => {
        setErrMsg(true);
      });
  };
  useEffect(() => {
    setErrMsg(false);
    fetchComments(article_id)
      .then((comments) => {
        comments.sort((a, b) => {
          let da = new Date(a.created_at);
          let db = new Date(b.created_at);
          return db - da;
        });

        setComments(comments);
      })
      .catch((err) => {
        setErrMsg(true);
      });
  }, [article_id, isPosted, isDeleted]);

  return (
    <>
      <div className="article-comments">
        <h3>Comments</h3>
        <NewComment
          article_id={article_id}
          comments={comments}
          setComments={setComments}
          setIsPosted={setIsPosted}
        />
        {isPosted && !errMsg && <p>Posting comment...</p>}
        {isDeleted && !errMsg && <p>Deleting comment...</p>}
        {errMsg && <p>Something went wrong, please try again</p>}
        {comments.map((comment) => {
          return (
            <div className="single-comment" key={comment.comment_id}>
              <h4>{comment.author}:</h4>
              <span>Posted at: {comment.created_at}</span>
              <p>{comment.body}</p>

              {comment.author === user && (
                <button
                  onClick={() => {
                    handleClick(comment.comment_id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
