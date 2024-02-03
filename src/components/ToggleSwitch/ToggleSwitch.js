import "./ToggleSwitch.css";
import React from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="temperature-toggle__container">
      <label className="toggle-switch">
        <input
          className="temperature-toggle__checkbox"
          type="checkbox"
          onChange={handleToggleSwitchChange}
        />
        <span className="slider"></span>
        <div className="slider__labels">
          <span className="slider__label_f">F</span>
          <span className="slider__label_c">C</span>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
