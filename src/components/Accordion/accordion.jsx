import classNames from "classnames";
import { useState } from "react";

import styles from "./styles.module.css";

export const Accordion = ({ children, title }) => {
  const [selected, setSelected] = useState(false);

  function toggleStateAccordion() {
    setSelected(!selected);
  }
  return (
    <div
      className={classNames(styles.accordion, { [styles.active]: selected })}
    >
      <button className={styles.accordionButton} onClick={toggleStateAccordion}>
        <p className={styles.title}>{title}</p>
      </button>
      <div className={styles.content}>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
};
