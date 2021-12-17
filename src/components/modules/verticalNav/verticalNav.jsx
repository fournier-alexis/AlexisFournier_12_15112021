import React from "react";
import style from "./verticalNav.module.css"
import { Link } from "react-router-dom";
import yoga from "./../../../assets/images/yoga.svg";
import swim from "./../../../assets/images/swim.svg";
import bike from "./../../../assets/images/bike.svg";
import dumbbell from "./../../../assets/images/dumbbell.svg";

/**
 * Return the left vertical nav
 * @returns {JSX.Element}
 */
export default function VerticalNav() {
    return (
        <div className={style.verticalNav}>
            <nav>
                <Link to="/dashboard"><img src={yoga} alt="Icône de yoga"/></Link>
                <Link to="/dashboard"><img src={swim} alt="Icône de nage"/></Link>
                <Link to="/dashboard"><img src={bike} alt="Icône de vélo"/></Link>
                <Link to="/dashboard"><img src={dumbbell} alt="Icône d'haltère"/></Link>
            </nav>
            <p className={style.copiryght}>Copiryght, SportSee 2020</p>
        </div>
    )
}