import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'

export default function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Think"}</h2>
            <h1 className={styles.title}>Reffrence</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.misc}`}>Misc</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.game}`}>Game</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
            
            <h2 className={styles.subtitle}>Choosen by editor </h2>
            <h1 className={styles.title}>Editor's Choice</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.misc}`}>Misc</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.txtContainer}>
                        <span className={`${styles.category} ${styles.game}`}>Game</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus?</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>john Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}