import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                
                    <Link href="/blog?cat=style" className={`${styles.category} ${styles.misc}`}>
                        <Image
                            src='/styles.jpg'
                            alt=""
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Miscelangous    
                    </Link>

                    <Link href="/blog?cat=style" className={`${styles.category} ${styles.game}`}>
                        <Image
                            src='/game.jpg'
                            alt=""
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Game
                    </Link>

                    <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
                        <Image
                            src='/food.jpg'
                            alt=""
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Food
                    </Link>

                    <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                        <Image
                            src='/travel.jpg'
                            alt=""
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Travel
                    </Link>
                
            </div>
        </div>
    )
}