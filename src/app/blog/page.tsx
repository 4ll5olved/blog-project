import CardList from "@/components/cardLists/cardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/menu/menu"
export default function BlogPage(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>style blog</h1>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}