import styles from "./styles.module.css";
import classNames from "classnames";

function Header({ children, user, onUpdateUser }) {
  // const handleClickButtonEdit = (e) => {
  //   e.preventDefault();
  //   onUpdateUser({ name: "Салахеев Ильнур Илдусович", about: "Ученик" });
  // };

  return (
    <header className={classNames(styles.header, "cover")}>
      <div className="container">
        {/* {user?.email && <span>{user?.email}</span>}
        {user?.name && <span>{user?.name}</span>} */}

        {/* <button className="btn" onClick={handleClickButtonEdit}>
          Изменить
        </button> */}

        <div className={styles.header__wrapper}>{children}</div>
      </div>
    </header>
  );
}

export default Header;
