import axios from "axios";

export const fetchArticles = (endpoint) => {
   
  return axios
    .get(`https://be-nc-news-aaron.herokuapp.com/api/articles`, {params: {topic: endpoint}})
    .then(({ data }) => {
      return data.articles;
    });
};
