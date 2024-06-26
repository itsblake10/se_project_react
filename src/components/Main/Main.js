import { useMemo } from "react";
import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectItem, clothingItems, onItemLike }) => {
  const { currentTemperatureUnit: temperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const weatherType = useMemo(() => {
    if (temperatureUnit === "F") {
      if (weatherTemp >= 86) {
        return "hot";
      } else if (weatherTemp >= 66 && weatherTemp <= 85) {
        return "warm";
      } else if (weatherTemp <= 65) {
        return "cold";
      }
    } else if (temperatureUnit === "C") {
      if (weatherTemp >= 30) {
        return "hot";
      } else if (weatherTemp >= 18.9 && weatherTemp < 29.4) {
        return "warm";
      } else if (weatherTemp < 18.3) {
        return "cold";
      }
    }
  }, [weatherTemp]);

  const filteredItems = clothingItems.filter((item) => {
    console.log(item.weather);
    return item.weather?.toLowerCase() === weatherType;
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
            <ItemCard
              item={item}
              key={item._id}
              onSelectItem={onSelectItem}
              onItemLike={onItemLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
