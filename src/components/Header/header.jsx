import styles from "./styles.module.css";
import classNames from "classnames";
import { ReactComponent as FavoriteIcon } from "./img/favorites.svg";
import { ReactComponent as LogoutIcon } from "./img/logout.svg";
import { ReactComponent as CartIcon } from "./img/cart.svg";
import { ReactComponent as ProfileIcon } from "./img/profile.svg";
import { ReactComponent as UserIcon } from "./img/user.svg";

import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

function Header({ children }) {
  const { favorites } = useContext(CardContext);
  const location = useLocation();

  return (
    <header className={classNames(styles.header, "cover")}>
      <div className="container">
        <div className={styles.header__wrapper}>
          {children}
          <div className={styles.iconsMenu}>
            <Link
              className={styles.favoritesLink}
              to={{ pathname: "/favorites" }}
            >
              <FavoriteIcon />
              {favorites.length !== 0 && (
                <span className={styles.iconBubble}>{favorites.length}</span>
              )}
            </Link>

            <Link className={styles.favoritesLink} to={{ pathname: "/cart" }}>
              <CartIcon />
              {favorites.length !== 0 && (
                <span className={styles.iconBubble}>{favorites.length}</span>
              )}
            </Link>

            <Link
              to="/login"
              state={{
                backgroundLocation: location,
                initialPath: location.pathname,
              }}
              className={styles.iconsMenuItem}
            >
              <UserIcon /> Войти
            </Link>

            <Link to="/profile" className={styles.iconsMenuItem}>
              <ProfileIcon /> Ильнур
            </Link>

            <Link to="/" className={styles.iconsMenuItem}>
              <LogoutIcon /> Выйти
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
