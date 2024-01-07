import "./Header.css";
import logo from "../../images/header/headerLogo.svg";
import profileAvatar from "../../images/header/headerAvatar.svg";

const Header = ({ onCreateModal, location }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container-left">
        <img className="header__logo" src={logo} alt="Logo" />
        <div className="header__date">
          {currentDate} / {location}
        </div>
      </div>
      <div className="header__container-right">
        <button className="header__add-clothing-button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div className="header__profile">
          <p className="header__profile-name">NAME NAMENAME</p>
          <img
            className="header__profile-avatar"
            src={profileAvatar}
            alt="Profile Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
