import styles from "./styles.module.css";
import classNames from "classnames";

function Header({ children }) {
  return (
    <header className={classNames(styles.header, "cover")}>
      <div className="container">
        <div className={styles.header__wrapper}>{children}</div>
      </div>
    </header>
  );
}

export default Header;
