import axios from "axios";

export const fetchTopics = ()=>{
    return axios.get("https://be-nc-news-x3yy.onrender.com/api/topics").then(({data})=>{
        return data.topics
    })
}