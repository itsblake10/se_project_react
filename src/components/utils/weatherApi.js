const apiKey = "1e177bf38b86799efd2f4446fb4e06e4";

const lat = -36.848461;
const lon = 174.763336;

export const getWeatherData = () => {
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    } else {
      return res.json();
    }
  });

  return weatherData;
};