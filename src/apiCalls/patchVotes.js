import axios from "axios";
const request = axios.create({
    baseURL: 'https://be-nc-news-x3yy.onrender.com/api/'
})
export const patchVotes = (article_id)=>{
    return request.patch(`articles/${article_id}`, {"inc_votes": 1}).then(({data})=>{
        return data.article
    })
}