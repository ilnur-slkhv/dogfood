import classNames from "classnames";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function Modal({ children }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setActive(true);
  }, []);

  function onClose() {
    setActive(false);
    navigate(-1);
  }

  return (
    <div
      className={classNames("modal", { ["active"]: active })}
      onClick={onClose}
    >
      <div
        className={classNames("modal_content", { ["active"]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
