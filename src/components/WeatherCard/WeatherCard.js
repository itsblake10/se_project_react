import "./WeatherCard.css";
import React from "react";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const { currentTemperatureUnit: temperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const imageSrc = weatherOptions.filter((options) => {
    return options.day === day && options.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section>
      <div className="weather-card">
        <p className="weather-card__info">
          {weatherTemp}°{temperatureUnit}
        </p>
        <img
          className="weather-card__image"
          src={imageSrcUrl}
          alt="Current Weather"
        />
      </div>
    </section>
  );
};

export default WeatherCard;
