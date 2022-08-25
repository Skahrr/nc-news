import React from "react";
import { fetchArticles } from "../apiCalls/fetchArticles";
import { useEffect, useState,  } from "react";
import { ArticleDisplay } from "./ArticleDisplay";
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
       
          return <ArticleDisplay article={article} key={article.article_id}/>;
        
      })}
    </main>
  );
};
