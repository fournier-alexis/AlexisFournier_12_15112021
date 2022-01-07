import style from "./welcome.module.css"
import { Link } from "react-router-dom"

/**
 * Return two button to select the user to use
 * @returns {JSX.Element}
 */
export default function Welcome(props) {

    /**
     * Send the new user id to parent
     * @param {*} event 
     * @returns {void}
     */
    function selectUser(event) {
        const value = event.target.textContent;
        props.onChange(value === "Karl" ? 12 : 18);
    }

    return (
        <div className={style.welcome}>
            <Link to="/dashboard" onClick={selectUser}>Karl</Link>
            <Link to="/dashboard" onClick={selectUser}>Cécilia</Link>
        </div>
    )
}