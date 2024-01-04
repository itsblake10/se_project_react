import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const imageSrc = weatherOptions.filter((options) => {
    return options.day === day && options.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section>
      <div className="weather-card">
        <p className="weather-card__info">{weatherTemp}°F</p>
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
