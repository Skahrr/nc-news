import { useState } from "react";
import { postComment } from "../apiCalls/postComment";
export const NewComment = ({ article_id, comments, setComments, setIsPosted }) => {
  const [commentBody, setCommentBody] = useState("");
  const handleBody = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosted(true)
    postComment(article_id, commentBody).then(()=>{
      setIsPosted(false)
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="Tell us what you think..."
        value={commentBody}
        required
        onChange={handleBody}
      />
      <button>Post</button>
    </form>
  );
};
