import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <ul className={styles.navbarContainer}>
      <li>
        <Link to="/" className={styles.link}>
            Home
        </Link>
      </li>
      <li>
        <Link to="/peliculas" className={styles.link}>
            Peliculas
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;