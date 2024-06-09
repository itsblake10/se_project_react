import React from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../images/header/headerLogo.svg";
// import profileAvatar from "../../images/header/headerAvatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onLoginModal,
  onRegisterModal,
  onCreateModal,
  location,
  isLoggedIn,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getInitial = () => {
    return currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "";
  };

  return (
    <header className="header">
      <div className="header__container-left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <div className="header__date">
          {currentDate} / {location}
        </div>
      </div>
      <div className="header__container-right">
        <ToggleSwitch />
        {isLoggedIn === true && (
          <>
            <button
              className="header__add-clothing-button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
            <div className="header__profile_loggedIn">
              <Link to="/profile" className="profile__link">
                <p className="header__profile-name">{currentUser.name}</p>
                {currentUser.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={`${currentUser.name}'s avatar`}
                    className="user-avatar__image"
                  />
                ) : (
                  <div className="user-avatar__placeholder">
                    {getInitial(currentUser.name)}
                  </div>
                )}
              </Link>
            </div>
          </>
        )}
        {isLoggedIn === false && (
          <>
            <div className="header__profile_loggedOut">
              <button
                className="header__sign-up-button"
                onClick={onRegisterModal}
              >
                Sign Up
              </button>
              <button className="header__log-in-button" onClick={onLoginModal}>
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
