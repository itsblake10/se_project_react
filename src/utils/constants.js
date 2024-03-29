// import heartIcon from "../images/heartIcon.svg";

/* ---------------------------- LIST ITEMS (HOME) --------------------------- */

// export const defaultClothingItems = [
//   {
//     _id: 0,
//     name: "Cap",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
//   },
//   {
//     _id: 1,
//     name: "Hoodie",
//     weather: "warm",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
//   },
//   {
//     _id: 2,
//     name: "Jacket",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
//   },
//   {
//     _id: 3,
//     name: "Sneakers",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
//   },
//   {
//     _id: 4,
//     name: "T-Shirt",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//   },
//   {
//     _id: 5,
//     name: "Winter coat",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
//   },
// ];

/* ---------------------- WEATHER OPTIONS (WEATHERCARD) --------------------- */

export const weatherOptions = [
  /* ----------------------------------- DAY ---------------------------------- */
  {
    url: require("../images/weatherConditions/day/day-cloudy.svg").default,
    day: true,
    type: "day-cloudy",
  },
  {
    url: require("../images/weatherConditions/day/day-fog.svg").default,
    day: true,
    type: "day-fog",
  },
  {
    url: require("../images/weatherConditions/day/day-rain.svg").default,
    day: true,
    type: "day-rain",
  },
  {
    url: require("../images/weatherConditions/day/day-snow.svg").default,
    day: true,
    type: "day-snow",
  },
  {
    url: require("../images/weatherConditions/day/day-storm.svg").default,
    day: true,
    type: "day-storm",
  },
  {
    url: require("../images/weatherConditions/day/day-sunny.svg").default,
    day: true,
    type: "day-sunny",
  },
  /* ---------------------------------- NIGHT --------------------------------- */
  {
    url: require("../images/weatherConditions/night/night-cloudy.svg").default,
    day: false,
    type: "night-cloudy",
  },
  {
    url: require("../images/weatherConditions/night/night-fog.svg").default,
    day: false,
    type: "night-fog",
  },
  {
    url: require("../images/weatherConditions/night/night-rain.svg").default,
    day: false,
    type: "night-rain",
  },
  {
    url: require("../images/weatherConditions/night/night-snow.svg").default,
    day: false,
    type: "night-snow",
  },
  {
    url: require("../images/weatherConditions/night/night-storm.svg").default,
    day: false,
    type: "night-storm",
  },
  {
    url: require("../images/weatherConditions/night/night-sunny.svg").default,
    day: false,
    type: "night-sunny",
  },
];
