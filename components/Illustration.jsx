import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

function Illustration(props) {
  return (
    <Image
      src="/profile_pic.jpg"
      height={700}
      width={600}
      alt={"yohans"}
    className={styles.responsiveimage}
        
    />
  );
}

export default Illustration;
