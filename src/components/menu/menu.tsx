import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <div className={styles.container}>
            <h2>{"Think"}</h2>
            <h1>Reffrence</h1>
            <div className={styles.Items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}></div>
                </Link>
            </div>
        </div>
    )
}