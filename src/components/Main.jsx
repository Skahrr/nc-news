import React from "react";
import { fetchArticles } from "../apiCalls/fetchArticles";
import { useEffect, useState,  } from "react";
import { ArticleDisplay } from "./ArticleDisplay";
import { useParams } from "react-router-dom";
import { Filter } from "./Filter";

export const Main = () => {
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [articles, setArticles] = useState([]);
  let {topic} = useParams()

   useEffect(() => {
    fetchArticles(topic, sort_by, order).then((articles) => {
      setArticles(articles);
    });
  }, [topic, sort_by, order]);

  return (
    <main>
      <Filter setSortBy={setSortBy} setOrder={setOrder}/>
      {articles.map((article) => {
       
          return <ArticleDisplay article={article} key={article.article_id}/>;
        
      })}
    </main>
  );
};
