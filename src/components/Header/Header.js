import "./Header.css";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container-left">
        <img
          className="header__logo"
          src={require("../../images/header/headerLogo.svg").default}
          alt="Logo"
        />
        <div className="header__date">{currentDate}/LOCATION</div>
      </div>
      <div className="header__container-right">
        <button className="header__add-clothing-button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div className="header__profile">
          <p className="header__profile-name">NAME NAMENAME</p>
          <img
            className="header__profile-avatar"
            src={require("../../images/header/headerAvatar.svg").default}
            alt="Profile Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
