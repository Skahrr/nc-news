import axios from "axios";

export const fetchArticles = ()=>{
    return axios.get("https://be-nc-news-aaron.herokuapp.com/api/articles").then(({data})=>{
        return (data.articles);
    })
}