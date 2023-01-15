import { forwardRef } from "react";

import styles from "./styles.module.css";
import classNames from "classnames";

const FormInput = forwardRef((props, ref) => {
  return props.typeinput === "textarea" ? (
    <textarea
      ref={ref}
      className={classNames(styles.input, styles.textarea)}
      {...props}
    />
  ) : (
    <input ref={ref} className={classNames(styles.input)} {...props} />
  );
});

export default FormInput;
