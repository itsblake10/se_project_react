import "./ToggleSwitch.css";
import React from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { handleToggleSwitchChange: handleToggleSwitchChange } =
    React.useContext(CurrentTemperatureUnitContext);

  return (
    <div className="temperature-toggle__container">
      <label className="toggle-switch">
        <input
          className="temperature-toggle__checkbox"
          type="checkbox"
          onChange={handleToggleSwitchChange}
        />
        <span className="slider">
          {/* <span className={`label ${isChecked ? "active" : ""}`}>F</span>
          <span className={`label ${isChecked ? "" : "active"}`}>C</span> */}
        </span>
        asdasdasdsad
      </label>
    </div>
  );
};

export default ToggleSwitch;
