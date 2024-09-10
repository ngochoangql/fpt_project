import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import LoginForm from "../../molecules/LoginForm/LoginForm.js";
import './LoginPage.scss'
function LoginPage() {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const handleInputChange = (field, value) => {
    setFormLogin({
      ...formLogin,
      [field]: value,
    });
  };
  console.log(formLogin.password);
  const handleSubmitLogin = () => {};
  return (
    <div className="login_page__container">
      <div className="login_page_logo">
        <img src="images/image.png" />
      </div>
      <div className="login_page_form">
        <LoginForm
          onChange={handleInputChange}
          handleSubmitLogin={handleSubmitLogin}
          formLogin={formLogin}
        />
      </div>
    </div>
  );
}

export default LoginPage;
