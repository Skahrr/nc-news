import axios from "axios";

export const fetchSingleArticle = (topic, article_id)=>{
    return axios.get(`https://be-nc-news-aaron.herokuapp.com/api/articles/${article_id}`).then(({data})=>{
        if(topic !== data.article.topic){
            console.log(' tu madre trabaja en colombia');
        }
        return data.article
    })
}