import classNames from "classnames";

import "./styles.css";
import save from "./save.svg";

const Card = ({
  name,
  price,
  discount,
  wight,
  description,
  pictures,
  tags,
}) => {
  const discount_price = Math.round(price - (price * discount) / 100);
  return (
    <div className="card">
      <div className="card__sticky card__sticky_type_top-left">
        {discount !== 0 && (
          <span className="card__discount">{`-${discount}%`}</span>
        )}
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className={classNames("tag", { [`tag tag_type_${tag}`]: true })}
            >
              {tag}
            </span>
          ))}
      </div>
      <div className="card__sticky card__sticky_type_top-right">
        <button className="card__favorite">
          <img
            src={save}
            alt="Добавить в избранное"
            className="card__favorite-icon"
          />
        </button>
      </div>

      <a href="/products" className="card__link">
        <img src={pictures} alt={description} className="card__image" />
        <div className="card__desc">
          <span className={discount !== 0 ? "card__old-price" : "card__price"}>
            {price}&nbsp;₽
          </span>
          {discount !== 0 && (
            <span className="card__price card__price_type_discount">
              {discount_price}&nbsp;₽
            </span>
          )}
          <span className="card__wight">{wight}</span>
          <p className="card__name">{name}</p>
        </div>
      </a>
      <a href="#" className="card__cart btn btn_type_primary">
        В корзину
      </a>
    </div>
  );
};

export default Card;
