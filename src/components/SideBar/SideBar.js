import "./SideBar.css";
import profileAvatar from "../../images/header/headerAvatar.svg";

const SideBar = () => {
  return (
    <div className="side-bar__container">
      <div className="side-bar__profile">
        <img
          className="side-bar__avatar"
          src={profileAvatar}
          alt="Profile Avatar"
        />
        <p className="side-bar__name">NAME NAMENAME</p>
      </div>
    </div>
  );
};

export default SideBar;
