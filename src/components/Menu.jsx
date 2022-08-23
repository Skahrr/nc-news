import { User } from "./User"
export const Menu = () => {
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
