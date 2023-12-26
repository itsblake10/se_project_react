import "./App.css";
import Header from "./Header/Header.js";
import WeatherCard from "./WeatherCard/WeatherCard.js";
import ItemCard from "./ItemCard/ItemCard.js";
import Footer from "./Footer/Footer.js";

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <WeatherCard /*day={true} type="cloudy" */ />
        <section className="home__grid">
          <p className="current__weather">
            Today is 75° F / You may want to wear:
          </p>
          <ul className="item__list">
            {defaultClothingItems.map((item) => {
              return <ItemCard item={item} />;
            })}
          </ul>
        </section>
      </main>
      <Footer />
      {/*<Main />
      {/* 
      <ModalWithForm />
      <ItemModal /> */}
    </div>
  );
}

export default App;
