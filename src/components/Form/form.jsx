import { useState } from "react";
import "./styles.css";

function Form({ serializeCb }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    serializeCb(formData);
    setFormData({
      name: "",
      lastName: "",
      phoneNumber: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Введите данные</h3>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phoneNumber"
        placeholder="Номер телефона"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <button>Отправить</button>
    </form>
  );
}

export default Form;
