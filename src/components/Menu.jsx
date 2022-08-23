import { User } from "./User"
import { fetchTopics } from "./apiCalls/fetchTopics"
import { useState, useEffect } from "react"
export const Menu = () => {
  const [topics, setTopics] = useState([])

  useEffect(()=>{
    fetchTopics().then((res)=>{
      setTopics(res)
    })
  }, [])

  {console.log(topics);}
  return (
    <menu>
        <div>Home</div>
        <select name="topics" id="topics">
            <option value="Coding">Coding</option>
            <option value="Football">Football</option>
            <option value="Cooking">Cooking</option>
        </select>
        <User/>
    </menu>
  )
}
