import axios from "axios";

export const fetchTopics = ()=>{
    return axios.get("https://be-nc-news-aaron.herokuapp.com/api/topics").then(({data})=>{
        return data.topics
    })
}