import axios from "axios";
const request = axios.create({
    baseURL: 'https://be-nc-news-aaron.herokuapp.com/api/'
})

export const deleteComment = (comment_id)=>{
    return request.delete(`/comments/${comment_id}`).then(()=>{
        window.location.reload()
    })
}