import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../images/header/headerLogo.svg";
import profileAvatar from "../../images/header/headerAvatar.svg";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, location }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <button className="header__add-clothing-button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div className="header__profile">
          <Link to="/profile" className="profile__link">
            <p className="header__profile-name">NAME NAMENAME</p>
            <img
              className="header__profile-avatar"
              src={profileAvatar}
              alt="Profile Avatar"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
