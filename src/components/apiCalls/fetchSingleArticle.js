import axios from "axios";

export const fetchSingleArticle = (article_id)=>{
    return axios.get(`https://be-nc-news-aaron.herokuapp.com/api/articles/${article_id}`).then(({data})=>{
        return data.article
    })
}