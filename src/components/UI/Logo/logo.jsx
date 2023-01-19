import "./styles.css";
import logoSrc from "./logo.svg";
import { Link } from "react-router-dom";

function Logo({ className, href }) {
  const hrefValue = href ? href : null;
  return hrefValue ? (
    <Link
      to={{ pathname: hrefValue }}
      className={className ? className : "logo"}
    >
      <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
    </Link>
  ) : (
    <a
      href="#"
      to={{ pathname: hrefValue }}
      className={className ? className : "logo"}
    >
      <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
    </a>
  );
}

export default Logo;
