import "./styles.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import Logo from "../UI/Logo/logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col">
            <Logo
              className="logo footer__logo"
              title="Логотип"
              aria-hidden={true}
            />
            <p className="footer__copyright">© «Интернет-магазин DogFood.ru»</p>
          </div>
          <div className="footer__col">
            <nav className="menu-bottom">
              <a href="/catalog" className="menu-bottom__item">
                Каталог
              </a>
              <a href="/promotion" className="menu-bottom__item">
                Акции
              </a>
              <a href="/news" className="menu-bottom__item">
                Новости
              </a>
              <a href="/reviews" className="menu-bottom__item">
                Отзывы
              </a>
            </nav>
          </div>
          <div className="footer__col">
            <nav className="menu-bottom">
              <a href="/payment-delivery" className="menu-bottom__item">
                Оплата и доставка
              </a>
              <a href="/faq" className="menu-bottom__item">
                Часто спрашивают
              </a>
              <a href="/feedback" className="menu-bottom__item">
                Обратная связь
              </a>
              <a href="/contacts" className="menu-bottom__item">
                Контакты
              </a>
            </nav>
          </div>
          <div className="footer__col">
            <div className="contacts">
              <p className="contacts__title">Мы на связи</p>
              <a
                className="contacts__tel contacts__link"
                href="tel:89177172179"
              >
                8 (999) 00-00-00
              </a>
              <a
                className="contacts__mail contacts__link"
                href="mailto:hordog.ru@gmail.com"
              >
                dogfood.ru@gmail.com
              </a>
              <ul className="socials contacts__socials">
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img
                      src={telegram}
                      alt="telegram"
                      className="socials__icon"
                    />
                  </a>
                </li>

                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="socials__icon"
                    />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={viber} alt="viber" className="socials__icon" />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img
                      src={instagram}
                      alt="instagram"
                      className="socials__icon"
                    />
                  </a>
                </li>
                <li className="socials__item">
                  <a className="socials__link" href="/#">
                    <img src={vk} alt="vk" className="socials__icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
