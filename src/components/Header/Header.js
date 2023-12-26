import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-left">
        <img
          className="header__logo"
          src="/images/header/headerLogo.svg"
          alt="Logo"
        />
        <div className="header__date">DATE/LOCATION</div>
      </div>
      <div className="header__container-right">
        <button className="header__add-clothing-button">+ Add clothes</button>
        <div className="header__profile">
          <p className="header__profile-name">NAME NAMENAME</p>
          <img
            className="header__profile-avatar"
            src="/images/header/headerAvatar.svg"
            alt="Profile Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
