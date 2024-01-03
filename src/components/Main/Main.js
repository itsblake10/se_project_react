import "./Main.css";
import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

const Main = ({ weatherTemp, onSelectItem }) => {
  return (
    <>
      <main className="main">
        <WeatherCard day={false} type="night-sunny" weatherTemp={weatherTemp} />
        <section className="home__grid">
          <p className="current__weather">
            Today is {weatherTemp}°F / You may want to wear:
          </p>
          <ul className="item__list">
            {defaultClothingItems.map((item) => (
              <ItemCard
                item={item}
                key={item._id}
                onSelectItem={onSelectItem}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
