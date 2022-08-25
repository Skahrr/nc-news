import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleArticle } from "./apiCalls/fetchSingleArticle";
import { patchVotes } from "./apiCalls/patchVotes";
import {BiUpvote} from "react-icons/bi"



export const SingleArticle = () => {
  let { topic, article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [actualVotes, setActualVotes] = useState()
  const [isDisabled, setDisabled] = useState(false)
  const [voteError, setVoteError] = useState(false)

  useEffect(() => {
    fetchSingleArticle(topic, article_id).then((article) => {
      setArticle(article);
      setActualVotes(article.votes)
    });
  }, [topic, article_id]);
  



  const incVotes = (e)=>{
    
    setActualVotes((currVotes)=>{
      return currVotes + 1
    })
    patchVotes(article_id).then(
      setDisabled(true)
    ).catch(()=>{
      setVoteError(true)
      setActualVotes((currVotes)=>{
        return currVotes -1
      })
    })
  }


 
  return (
    <main>
      <div className="title-single-article">{article.title}</div>
      <p className="article-body">{article.body}</p>
      <div className="information">
        <p className="author">Written by: {article.author}</p>
        <p className="created_at">{article.created_at}</p>
        <p className="comment_count">Comments: {article.comment_count}</p>
      </div>
      <div className="votes">
        <label htmlFor="votes">Votes: {actualVotes}</label>
        <button id="votes" onClick={incVotes} disabled={isDisabled}><BiUpvote/></button>
        {voteError && <p>Something went wrong, please refresh the page</p>}
      </div>
      <div className="btn-back">
        <button><Link to={`/articles/${article.topic}`}>Back</Link> </button>
      </div>
    </main>
  );
};
