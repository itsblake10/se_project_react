import "./App.css";
import Header from "./Header/Header.js";
import WeatherCard from "./WeatherCard/WeatherCard.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy" />
      </main>
      {/*<Main />
      {/* 
      <Footer />
      <ModalWithForm />
      <ItemModal /> */}
    </div>
  );
}

export default App;
