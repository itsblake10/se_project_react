import { checkResponse } from "./api";

const apiKey = "1e177bf38b86799efd2f4446fb4e06e4";

const lat = -36.848461;
const lon = 174.763336;

export const getWeatherData = () => {
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then((res) => {
    return checkResponse(res);
  });

  return weatherData;
};
