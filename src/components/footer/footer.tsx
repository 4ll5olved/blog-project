import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.jpg" alt="blogins" width={50} height={50}/>
                    <h1 className={styles.logoText}>Blogins</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti amet ipsa excepturi obcaecati nobis iure, doloremque quas tenetur tempore quisquam voluptate eveniet quam. Totam.
                </p>
                <div className={styles.icons}>
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
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Misc</Link>
                    <Link href="/">Game</Link>
                    <Link href="/">Food</Link>
                    <Link href="/">Travel</Link>
                </div>
            </div>
        </div>
    );
}