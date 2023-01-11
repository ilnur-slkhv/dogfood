import styles from "./styles.module.css";
import classNames from "classnames";
import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  return <input ref={ref} className={classNames(styles.input)} {...props} />;
});

export default FormInput;
