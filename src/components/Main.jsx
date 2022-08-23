import React from "react";
import { fetchArticles } from "./apiCalls/fetchArticles";
import { useEffect, useState } from "react";
import { Article } from "./Article";
export const Main = () => {

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetchArticles().then((articles)=>{
      setArticles(articles)
    })
  }, [])

  return (
    <main>
      {articles.map((article)=>{
        return <Article article={article}/>
      })}
    </main>
  );
};
