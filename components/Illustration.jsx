import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

function Illustration(props) {
  return (
    <img
      src="/profile_pic.jpg"
      layout="fill"
      width="50%"
      alt={"yohans"}
      className={styles.profilepic}
    />
  );
}

export default Illustration;
