import Menu from "@/components/menu/menu"
import styles from "./singlepage.module.css"
import Image from "next/image"
export default function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                    <div className={styles.user}>
                        <div className={styles.usrImgContainer}>
                            <Image src="/hero-img.jpg" alt="" fill className={styles.avatar}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>john doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/hero-img.jpg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga eveniet harum asperiores aspernatur qui, porro sapiente. Iusto repellendus doloremque tenetur quaerat, a expedita et error modi enim. Fugiat, optio.</p>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sunt adipisci earum? Quaerat quidem soluta corrupti, ab laborum placeat voluptatibus repellat voluptate blanditiis dolores nemo minus temporibus cumque inventore tenetur!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo recusandae ut amet placeat ab mollitia fugit laudantium repellendus distinctio, magni a. Quos commodi, officia minus maxime optio adipisci in.</p>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}