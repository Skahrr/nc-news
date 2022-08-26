import axios from "axios";

const request = axios.create({
    baseURL: 'https://be-nc-news-aaron.herokuapp.com/api/'
})

export const postComment = (article_id, commentBody)=>{
    return request.post(`articles/${article_id}/comments`, {username: 'jessjelly', body: commentBody}).then(({data})=>{
        return data.comment
    })
}