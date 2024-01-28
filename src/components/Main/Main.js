import "./Main.css";
// import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";
import React from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectItem, clothingItems }) => {
  const { currentTemperatureUnit: temperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="night-sunny" weatherTemp={weatherTemp} />
      <section className="home__grid">
        <p className="current__weather">
          Today is {weatherTemp}°{temperatureUnit} / You may want to wear:
        </p>
        <ul className="item__list">
          {filteredItems.map((item) => (
            <ItemCard item={item} key={item._id} onSelectItem={onSelectItem} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
