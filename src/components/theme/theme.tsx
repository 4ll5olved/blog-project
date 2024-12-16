import { useContext } from "react";
import styles from "./theme.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/themeContext";

export default function Theme() {

    const {theme} = useContext(ThemeContext)
    return (
        <div className={styles.container}>
            <Image src="/themeComp/moon.png" alt="Moon" width={14} height={14} />
            <div className={styles.ball}></div>
            <Image src="/themeComp/sun.png" alt="Sun" width={14} height={14} />
        </div>
    );
}