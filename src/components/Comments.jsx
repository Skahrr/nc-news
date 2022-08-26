import { fetchComments } from "../apiCalls/fetchComments";
import { useState, useEffect, useContext } from "react";
import { NewComment } from "./NewComment";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../apiCalls/deleteComment";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const {user} = useContext(UserContext)
  

  const handleClick = (comment_id)=>{
    console.log();
    deleteComment(comment_id).then(()=>{
      fetchComments(article_id).then((updatedComments)=>{
        setComments(updatedComments)
        console.log(comments)
      })
    });
  }
  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      comments.sort((a,b)=>{
        let da = new Date(a.created_at)
        let db = new Date(b.created_at)
        return  db-da;
      }, [article_id])
      
      setComments(comments);
    });
  }, [article_id]);

  return (
    <>
    <div className="article-comments">
      <h3>Comments</h3>
    <NewComment article_id={article_id} comments={comments} setComments={setComments}/>
    
      {comments.map((comment) => {
        
        return (
          <div className="single-comment" key={comment.comment_id}>
            <h4>{comment.author}:</h4>
            <span>Posted at: {comment.created_at}</span>
            <p>{comment.body}</p>
            
            {comment.author===user && <button onClick={()=>{handleClick(comment.comment_id)}}>Delete</button>}
          </div>
        );
      })}
    </div>
    </>
  );
};
