import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useEffect } from "react";

const LoginModal = ({
  onLogin,
  isOpen,
  onClose,
  buttonText,
  buttonTwoText,
  onButtonTwoSubmit,
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isOpen === true) {
      setUserEmail("");
      setUserPassword("");
    }
  }, [isOpen]);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const user = {
    email: userEmail,
    password: userPassword,
  };

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(user);
  }

  return (
    <ModalWithForm
      title="Log In"
      name="register-user"
      buttonText={buttonText}
      buttonTwoText={buttonTwoText}
      onClose={onClose}
      onSubmit={handleSubmit}
      onButtonTwoSubmit={onButtonTwoSubmit}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Email*
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            value={userEmail}
            minLength="1"
            maxLength="50"
            onChange={handleEmailChange}
          />
        </label>
        <label className="modal__label">
          Password*
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Password"
            value={userPassword}
            minLength="1"
            maxLength="1000"
            onChange={handlePasswordChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default LoginModal;
