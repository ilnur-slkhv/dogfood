import "./styles.css";

import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit, formState } = useForm({ mode: "onBlur" });

  const cbSubmit = (data) => {
    console.log(data);
  };

  console.log(formState);

  //   for (const error in errors) {
  //     console.log(errors[error]);
  //     errors[error]?.classList.add("error");
  //   }

  return (
    <form onSubmit={handleSubmit(cbSubmit)}>
      <h3>Регистрация</h3>
      <input
        {...register("name", {
          minLength: {
            value: 2,
            message: "Имя пользовтаеля не менее 2 символов",
          },
        })}
        type="text"
        placeholder="Имя"
      />

      <div>
        {formState.errors?.name && (
          <p className="errorMessage"> {formState?.name?.message}</p>
        )}
      </div>

      <input {...register("email")} type="text" placeholder="Email" />
      <input
        {...register("password", {
          required: {
            value: true,
            message: "Поле пароля обязательно для заполнения",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру.",
          },
        })}
        type="password"
        placeholder="Password"
      />

      <div>
        {formState.errors?.password && (
          <p className="errorMessage"> {formState.errors?.password?.message}</p>
        )}
      </div>

      <button>Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;
