import React from 'react';
import styles from './cardList.module.css';
import Image from 'next/image';
import Card from '../card/card';


export default function CardList () {
  
    return (
      <div className={styles.container}>
        <div className={styles.title}> <h1>Recent Posts</h1></div>
        <div className={styles.Posts}>
            
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           
        </div>
      </div>
    );
  }

