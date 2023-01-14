// import classNames from "classnames";
// import { useForm } from "react-hook-form";
// import FormButton from "../FormButton/form-button";
// import FormInput from "../FormInput/form-input";
import styles from "./styles.module.css";

function Form({ title, handleFormSubmit, children }) {
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h1 className={styles.title}>{title}</h1>

      {children}

      {/* <FormInput
        // {...emailRegister}
        id="email"
        type="text"
        placeholder={input.email}
      />
      <div>
        {errors?.email && (
          <p className="errorMessage">{errors?.email?.message}</p>
        )}
      </div>

      {["login", "registration"].includes(formType) && (
        <>
          <FormInput
            // {...passwordRegister}
            id="password"
            type="password"
            placeholder={input.password}
          />
          <div>
            {errors?.password && (
              <p className="errorMessage">{errors?.password?.message}</p>
            )}
          </div>
        </>
      )}

      {formType === "login" && (
        <p
          className={classNames(styles.infoText, styles.link)}
          onClick={() => changeType("reset")}
        >
          {infoText}
        </p>
      )}

      {["reset", "registration"].includes(formType) && (
        <p className={styles.infoText}>{infoText}</p>
      )}

      <FormButton type="submit" color="yellow">
        {button.submit}
      </FormButton>

      {["login", "registration"].includes(formType) && (
        <FormButton
          type="button"
          color="white"
          onClick={() => changeType(redirect)}
        >
          {button.redirect}
        </FormButton>
      )} */}
    </form>
  );
}

export default Form;
