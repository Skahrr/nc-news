import React from "react";
import { fetchArticles } from "./apiCalls/fetchArticles";
import { useEffect, useState,  } from "react";
import { Article } from "./Article";
import { useParams } from "react-router-dom";

export const Main = () => {
  const [articles, setArticles] = useState([]);
  let {topic} = useParams()

   useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <main>
      {articles.map((article) => {
       
          return <Article article={article} />;
        
      })}
    </main>
  );
};
