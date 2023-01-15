import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import banner from "./img/banner.png";
import arrow from "./img/arrow.svg";
import classNames from "classnames";

export const Hero = () => {
  return (
    <div className={styles.banner}>
      <div className={classNames("container", styles.banner__container)}>
        <div className={styles.left}>
          <h1 className={styles.title}>Крафтовые лакомства для собак</h1>
          <p className={styles.subtitle}>
            Всегда свежие лакомства ручной работы с доставкой по России и Миру
          </p>
          <Link to="catalog" className={styles.link}>
            Каталог <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className={styles.right}>
          <img src={banner} alt="Заглавное изображение" />
        </div>
      </div>
    </div>
  );
};
