import React from "react";
import "./UserAvatar.css"; // Import the CSS file

const UserAvatar = ({ name, avatarUrl }) => {
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div className="user-avatar">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="user-avatar__image"
        />
      ) : (
        <div className="user-avatar__placeholder">{getInitial(name)}</div>
      )}
    </div>
  );
};

export default UserAvatar;
