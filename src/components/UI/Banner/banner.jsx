import classNames from "classnames";
import styles from "./styles.module.css";

export const Banner = ({
  title,
  subtitle,
  background,
  price,
  extraClass,
  colorBackground,
}) => {
  return (
    <div
      className={classNames(
        styles.banner,
        {
          [styles[extraClass]]: !!extraClass,
        },
        "container"
      )}
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: colorBackground,
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <span className={styles.price}>{price}</span>
    </div>
  );
};
