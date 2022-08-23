import { User } from "./User";
import { fetchTopics } from "./apiCalls/fetchTopics";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [topics, setTopics] = useState([]);
  

  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res);
    });
  }, []);
 

  return (
    <menu>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <ul>
        <div>
          <li>Topics</li>
        </div>
        <div>
          {topics.map((topic) => {
            return (
              <li>
                <Link to={`articles/${topic.slug}`}>
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
      <User />
    </menu>
  );
};
