import "./Toggle.css"
import { IoSunnySharp as Sun, IoMoon as Moon } from "react-icons/io5";

export const Toggle = ({ handleChange, isChecked}) => {
  return (
  <div className="toggle-container">
    <input type="checkbox" id="check" className="toggle" onChange={handleChange} checked={isChecked} />
    <label htmlFor="check">
        <Sun className="toggle-icon sun"/>
        <Moon className="toggle-icon moon"/>
    </label>
  </div>
    )
}
