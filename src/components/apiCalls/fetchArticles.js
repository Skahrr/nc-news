import axios from "axios";

export const fetchArticles = (endpoint) => {
    let query = ''
    if(endpoint){
        query = `?topic=${endpoint}`
    }
  return axios
    .get(`https://be-nc-news-aaron.herokuapp.com/api/articles${query}`)
    .then(({ data }) => {
      return data.articles;
    });
};
