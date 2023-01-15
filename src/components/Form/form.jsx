import styles from "./styles.module.css";

function Form({ title, handleFormSubmit, children }) {
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </form>
  );
}

export default Form;
