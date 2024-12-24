import Categories from "@/components/categories/categories";
import Hero from "@/components/hero/hero";
import Head from "next/head";
import styles from "./homepage.module.css";
import Image from "next/image";
import CardList from "@/components/cardLists/cardList";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Hero/>
        <Categories/>
        <div className={styles.content}>
          <CardList/>
          <Menu/>
        </div>
      </div>
    </div>
  );
}
