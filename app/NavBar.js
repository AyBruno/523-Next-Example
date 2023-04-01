import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function NavBar(){
  return(
    <nav className = {styles.container}>
      <Link href="./home">
        <Image className = {styles.logo} src = '/logo.png' width = {50} height = {50}/>
      </Link>
      <ul className={styles.items}>
        <Link href='./home'><li>Home</li></Link>
        <Link href='./teams'><li>Teams</li></Link>
      </ul>
    </nav>
  )
}