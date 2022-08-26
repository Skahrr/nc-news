import axios from "axios";

export const fetchArticles = (topic, sort_by, order) => {
   
  return axios
    .get(`https://be-nc-news-aaron.herokuapp.com/api/articles`, {params: {topic, sort_by, order}})
    .then(({ data }) => {
      return data.articles;
    });
};
