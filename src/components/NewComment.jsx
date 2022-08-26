import { useState } from "react";
import { postComment } from "../apiCalls/postComment";
export const NewComment = ({ article_id, comments, setComments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [optimisticCommentID, setOptimisticID] = useState(382)
  const handleBody = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const optimisticComment = {
      comment_id: optimisticCommentID,
      body: commentBody,
      author: 'jessjelly',
      votes: 0
    }
    setComments([optimisticComment, ...comments])
    setOptimisticID((currID)=>{
      return currID + 1
    })
    postComment(article_id, commentBody);
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
