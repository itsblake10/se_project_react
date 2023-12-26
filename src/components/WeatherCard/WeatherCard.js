import "./WeatherCard.css";

const weatherOptions = [
  /* ----------------------------------- DAY ---------------------------------- */
  {
    url: "/images/weatherConditions/day/day-cloudy.svg",
    day: true,
    type: "day-cloudy",
  },

  {
    url: "/images/weatherConditions/day/day-fog.svg",
    day: true,
    type: "day-fog",
  },

  {
    url: "/images/weatherConditions/day/day-rain.svg",
    day: true,
    type: "day-rain",
  },

  {
    url: "/images/weatherConditions/day/day-snow.svg",
    day: true,
    type: "day-snow",
  },

  {
    url: "/images/weatherConditions/day/day-storm.svg",
    day: true,
    type: "day-storm",
  },

  {
    url: "/images/weatherConditions/day/day-sunny.svg",
    day: true,
    type: "day-sunny",
  },

  /* ---------------------------------- NIGHT --------------------------------- */
  {
    url: "/images/weatherConditions/night/night-cloudy.svg",
    day: false,
    type: "night-cloudy",
  },

  {
    url: "/images/weatherConditions/night/night-fog.svg",
    day: false,
    type: "night-fog",
  },

  {
    url: "/images/weatherConditions/night/night-rain.svg",
    day: false,
    type: "night-rain",
  },

  {
    url: "/images/weatherConditions/night/night-snow.svg",
    day: false,
    type: "night-snow",
  },

  {
    url: "/images/weatherConditions/night/night-storm.svg",
    day: false,
    type: "night-storm",
  },

  {
    url: "/images/weatherConditions/night/night-sunny.svg",
    day: false,
    type: "night-sunny",
  },
];

const WeatherCard = (/*{ day, type }*/) => {
  //   const imageSrc = weatherOptions.filter((i) => {
  //     return i.day === day && i.type === type;
  //   });

  //   console.log(imageSrc);

  //   const imageSrcUrl = imageSrc[0].url || "";

  //   console.log(imageSrcUrl);

  return (
    <section>
      <div className="weather-card">
        <p className="weather-card__info">75°F</p>
        <img
          className="weather-card__image"
          //   src={imageSrcUrl}
          src="/images/weatherConditions/day/day-cloudy.svg"
          alt="Current Weather"
        />
      </div>
    </section>
  );
};

export default WeatherCard;
