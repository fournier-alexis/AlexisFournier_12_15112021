import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.svg"
import style from "./header.module.css"

/**
 * Return the top horizontal header
 * @returns {JSX.Element}
 */
export default function Header() {
    return (
        <header className={style.header}>
            <nav>
                <img src={logo} alt="Logo de SportSee" />
                <Link to="/">Accueil</Link>
                <Link to="/dashboard">Profil</Link>
                <Link to="/dashboard">Réglage</Link>
                <Link to="/dashboard">Communauté</Link>
            </nav>
        </header>
    )
}