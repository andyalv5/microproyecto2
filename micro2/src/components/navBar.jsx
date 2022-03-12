
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { auth } from "../utils/firebase";


function Navbar() {

  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };
  return (
    <ul className={styles.navbarContainer}>
      <li>
        <Link to="/" className={styles.link}>
            Home
        </Link>
      </li>
      <li>
        <Link to="/peliculas" className={styles.link}>
            Lista de Peliculas
        </Link>
      </li>
      
      {!user ? (
        <li className={styles.rightSide}>
          <div className={styles.container}>
            <Link to="/registerPage"  className={styles.link}>
              register
            </Link>
          </div>

          <div className={styles.container}>
            <Link to="/loginPage" className={styles.link}>
              login
            </Link>
          </div>
        </li>
      ) : (
        <li className={styles.rightSide}>
          <div className={styles.container}>{user.name}</div>

          <div className={styles.container}>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
      )}
     

    </ul>
  )  
  
}

export default Navbar;
