'use client';

import React from 'react';
import styles from './hero.module.css'; // Import the custom CSS
import { ReactTyped } from 'react-typed';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center ${styles.hero}`}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hello Insiders!</b> <br />Welcome to my space of ideas.
        </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.postTitle}>Lorem ipsum </h1>
                <p className={styles.postDesc}>dolor sit amet consectetur adipisicing elit. Aliquid sunt deleniti impedit, ipsa neque unde in non. Debitis nulla earum consequatur, ex numquam eligendi laudantium deserunt repellat optio commodi vero!</p>
                <button className={styles.button}>Read more</button>
            </div>
        </div>
      </div>
    </section>
  );
}
