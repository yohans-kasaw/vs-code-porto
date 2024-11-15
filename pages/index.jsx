import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}></div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Yohans Kasaw</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
