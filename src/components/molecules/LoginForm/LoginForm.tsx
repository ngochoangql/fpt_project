import React from "react";
import Input from "../../atoms/Input/Input.tsx";
import "./LoginForm.scss";
import Button from "../../atoms/Button/Button.tsx";
const LoginForm = ({ formLogin, handleSubmitLogin, onChange }) => {
  return (
    <div className="login_form">
      <p className="login_form__title">User Login</p>
      <Input
        onChange={onChange}
        label={"email"}
        type="text"
        placeholder="Email"
        imageUrl="images/email.png"
      />
      <Input
        onChange={onChange}
        label={"password"}
        type="password"
        placeholder="Password"
        imageUrl="images/password_hidden.png"
      />
      <div className="login_form__forgot_password">
        <img src="images/forgot_key.png" />
        <p> Forgot Password</p>
      </div>
      <Button onClick={handleSubmitLogin} />
    </div>
  );
};

export default LoginForm;
