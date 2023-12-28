import "./WeatherCard.css";

const weatherOptions = [
  /* ----------------------------------- DAY ---------------------------------- */
  {
    url: require("../../images/weatherConditions/day/day-cloudy.svg").default,
    day: true,
    type: "day-cloudy",
  },
  {
    url: require("../../images/weatherConditions/day/day-fog.svg").default,
    day: true,
    type: "day-fog",
  },
  {
    url: require("../../images/weatherConditions/day/day-rain.svg").default,
    day: true,
    type: "day-rain",
  },
  {
    url: require("../../images/weatherConditions/day/day-snow.svg").default,
    day: true,
    type: "day-snow",
  },
  {
    url: require("../../images/weatherConditions/day/day-storm.svg").default,
    day: true,
    type: "day-storm",
  },
  {
    url: require("../../images/weatherConditions/day/day-sunny.svg").default,
    day: true,
    type: "day-sunny",
  },
  /* ---------------------------------- NIGHT --------------------------------- */
  {
    url: require("../../images/weatherConditions/night/night-cloudy.svg")
      .default,
    day: false,
    type: "night-cloudy",
  },
  {
    url: require("../../images/weatherConditions/night/night-fog.svg").default,
    day: false,
    type: "night-fog",
  },
  {
    url: require("../../images/weatherConditions/night/night-rain.svg").default,
    day: false,
    type: "night-rain",
  },
  {
    url: require("../../images/weatherConditions/night/night-snow.svg").default,
    day: false,
    type: "night-snow",
  },
  {
    url: require("../../images/weatherConditions/night/night-storm.svg")
      .default,
    day: false,
    type: "night-storm",
  },
  {
    url: require("../../images/weatherConditions/night/night-sunny.svg")
      .default,
    day: false,
    type: "night-sunny",
  },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((options) => {
    return options.day === day && options.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section>
      <div className="weather-card">
        <p className="weather-card__info">75°F</p>
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
