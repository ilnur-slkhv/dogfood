import React from "react";
import notFound from "./img/ic-notfound.svg";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export const NotFound = ({
  children,
  title,
  buttonText = "На главную",
  buttonAction,
}) => {
  return (
    <>
      <div className={styles.notFound}>
        <img
          src={notFound}
          className={styles.image}
          aria-hidden="true"
          alt=""
        />
        <h1 className={styles.title}>{title}</h1>
        {children && children}
        {buttonAction ? (
          <a href="#" className="btn" onClick={buttonAction}>
            {buttonText}
          </a>
        ) : (
          <Link to="/" className="btn">
            {buttonText}
          </Link>
        )}
      </div>
    </>
  );
};
