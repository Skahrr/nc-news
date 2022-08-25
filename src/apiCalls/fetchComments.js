import axios from "axios";

const request = axios.create({
    baseURL: 'https://be-nc-news-aaron.herokuapp.com/api/'
})


export const fetchComments = (article_id) => {
  return request.get(`articles/${article_id}/comments`).then(({data})=>{
    return data.comments
  })
}
