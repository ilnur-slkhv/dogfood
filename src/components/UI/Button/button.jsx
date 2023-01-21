import styles from "./styles.module.css";
import classNames from "classnames";

function Button({ type, children }) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
