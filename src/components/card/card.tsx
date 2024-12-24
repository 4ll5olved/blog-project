import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
            </div>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>23/12/2024</span>
                        <span className={styles.category}>TRAVEL</span>
                    </div>
                    <Link href="/"><h1>Lorem ipsum dolor sit amet</h1></Link>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu venenatis sem. Maecenas id interdum neque, vitae porttitor nibh. Fusce dictum mi eget mi vulputate, nec pellentesque tellus feugiat. Ut eget sem ornare, mollis tellus vitae, tincidunt massa. Nunc eget purus et diam tincidunt laoreet ut a odio. </p>
                    <Link href="/" className={styles.link}>Read more</Link>
                </div>
        </div>
    )
}