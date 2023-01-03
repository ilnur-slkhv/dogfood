import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const ContentHeader = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <a href="#" className={styles.buttonBack} onClick={() => navigate(-1)}>
        Назад
      </a>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
