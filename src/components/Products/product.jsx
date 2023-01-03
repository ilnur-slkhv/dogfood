import styles from "./styles.module.css";
import classNames from "classnames";
import { ReactComponent as Save } from "./img/save.svg";
import truck from "./img/truck.svg";
import quality from "./img/quality.svg";

import { calcDiscountPrice, createMarkup, isLiked } from "../../utils/product";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ContentHeader } from "../ContentHeader/content-header";

export const Product = ({
  onProductLike,
  pictures,
  likes = [],
  name,
  price,
  discount,
  description,
}) => {
  const { user: currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const discount_price = calcDiscountPrice(price, discount);
  const isLike = isLiked(likes, currentUser?._id);
  const descriptionHtml = createMarkup(description);

  return (
    <>
      <ContentHeader title={name}>
        <div>
          <span>Артикул:</span> <b>3246842</b>
        </div>
      </ContentHeader>

      <div className={styles.product}>
        <div className={styles.imgWrapper}>
          <img src={pictures} alt={`Изображение ${name}`} />
        </div>
        <div className={styles.desc}>
          <span className={discount ? styles.oldPrice : styles.price}>
            {price}&nbsp;₽
          </span>
          {discount !== 0 && (
            <span
              className={classNames(
                styles.price,
                styles.card__price_type_discount
              )}
            >
              {discount_price}&nbsp;₽
            </span>
          )}
          <div className={styles.btnWrap}>
            <div className={styles.left}>
              <button className={styles.minus}>-</button>
              <span className={styles.num}>0</span>
              <button className={styles.plus}>+</button>
            </div>
            <a
              href="#"
              className={classNames(
                styles.btn,
                styles.btn_type_primary,
                styles.cart
              )}
            >
              В корзину
            </a>
          </div>
          <button
            className={classNames(styles.favorite, {
              [styles.favoriteActive]: isLike,
            })}
            onClick={onProductLike}
          >
            <Save />
            <span> {isLike ? "В избранном" : "В избранное"}</span>
          </button>
          <div className={styles.delivery}>
            <img src={truck} alt="truck" />
            <div className={styles.right}>
              <h3 className={styles.name}>Доставка по всему миру!</h3>
              <p className={styles.text}>
                Доставка курьером —{" "}
                <span className={styles.bold}>от 399 ₽</span>
              </p>
            </div>
          </div>
          <div className={styles.delivery}>
            <img src={quality} alt="quality" />
            <div className={styles.right}>
              <h3 className={styles.name}>Доставка по всему миру!</h3>
              <p className={styles.text}>
                Доставка курьером —{" "}
                <span className={styles.bold}>от 399 ₽</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <h2 className={styles.title}>Описание</h2>
        <p
          className={styles.subtitle}
          dangerouslySetInnerHTML={descriptionHtml}
        ></p>
        <h2 className={styles.title}>Характеристики</h2>
        <div className={styles.grid}>
          <div className={styles.naming}>Вес</div>
          <div className={styles.description}>1 шт 120-200 грамм</div>
          <div className={styles.naming}>Цена</div>
          <div className={styles.description}>490 ₽ за 100 грамм</div>
          <div className={styles.naming}>Польза</div>
          <div className={styles.description}>
            <p>
              Большое содержание аминокислот и микроэлементов оказывает
              положительное воздействие на общий обмен веществ собаки.
            </p>
            <p>Способствуют укреплению десен и жевательных мышц.</p>
            <p>
              Развивают зубочелюстной аппарат, отвлекают собаку во время смены
              зубов.
            </p>
            <p>
              Имеет цельную волокнистую структуру, при разжевывание получается
              эффект зубной щетки, лучше всего очищает клыки собак.
            </p>
            <p>Следует учесть высокую калорийность продукта.</p>
          </div>
        </div>
      </div>
    </>
  );
};
