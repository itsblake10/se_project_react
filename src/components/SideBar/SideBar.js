import "./SideBar.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditProfileModal, onSignout }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log(currentUser);

  return (
    <div className="side-bar__container">
      <div className="side-bar__profile">
        {currentUser ? (
          <>
            <img
              src={currentUser.avatar}
              alt={`${currentUser.name}'s avatar`}
              className="side-bar__avatar"
            />
            <p className="side-bar__name">{currentUser.name}</p>;
          </>
        ) : (
          <div
            className="side-bar__profile-avatar_placeholder"
            alt="User avatar"
          >
            <p className="side-bar__profile-avatar_placeholder-initial">
              {/* {currentUser.name.charAt(0).toUpperCase()} */}
            </p>
          </div>
        )}
      </div>
      <button className="side-bar__edit-profile" onClick={onEditProfileModal}>
        Change profile data
      </button>
      <button className="side-bar__log-out" onClick={onSignout}>
        Log Out
      </button>
    </div>
  );
};

export default SideBar;
