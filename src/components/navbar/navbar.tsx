import React from "react";
import 'boxicons/css/boxicons.min.css';
import styles from './navbar.module.css';
import Link from "next/link";
import Theme from "../theme/theme";
import AuthLinks from "../authLinks/authLinks";

export default function Navbar() {
    return(
        <div className={styles.container}>
            <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="bx bxl-facebook text-blue-500 text-2xl hover:text-blue-700"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="bx bxl-twitter text-blue-400 text-2xl hover:text-blue-600"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="bx bxl-instagram text-pink-500 text-2xl hover:text-pink-700"></i>
                </a>
                <a href="https://quora.com" target="_blank" rel="noopener noreferrer" aria-label="Quora">
                    <i className="bx bxl-quora text-red-500 text-2xl hover:text-red-700"></i>
                </a>
            </div>
            <div className={styles.logo}>BlogInside</div>
            <div className={styles.links}>
                <Theme/>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>About</Link>
                <AuthLinks/>
            </div>
            
        </div>
    )
}