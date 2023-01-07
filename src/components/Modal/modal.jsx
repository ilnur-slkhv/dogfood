import classNames from "classnames";

import "./styles.css";

function Modal({ active, setActive, children }) {
  return (
    <div
      className={classNames("modal", { ["active"]: active })}
      onClick={() => {
        setActive(false);
      }}
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
