import styles from "./styles.module.css";
import classNames from "classnames";

const FormButton = ({ children, color, ...props }) => {
  return (
    <button {...props} className={classNames(styles.btn, styles[color])}>
      {children}
    </button>
  );
};

export default FormButton;
