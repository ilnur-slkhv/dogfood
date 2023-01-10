import classNames from "classnames";
import { useForm } from "react-hook-form";
import FormButton from "../FormButton/form-button";
import FormInput from "../FormInput/form-input";
import styles from "./styles.module.css";

function Form({
  title,
  formType,
  button,
  input,
  infoText,
  infoTextHeader,
  changeType,
  redirect,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const cbSubmit = (data) => {
    console.log(data);
  };

  const emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const emailRegister = register("email", {
    required: {
      value: true,
      message: "Обязательное поле",
    },
    pattern: {
      value: emailRegexp,
      message: "Email не соответствует формату электронной почты",
    },
  });

  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "Обязательное поле",
    },
    pattern: {
      value: passwordRegexp,
      message:
        "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру.",
    },
  });

  return (
    <form onSubmit={handleSubmit(cbSubmit)}>
      <h1 className={styles.title}>{title}</h1>
      <FormInput
        {...emailRegister}
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
            {...passwordRegister}
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
      )}
    </form>
  );
}

export default Form;
