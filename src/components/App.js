import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import ItemModal from "./ItemModal/ItemModal.js";
import { getWeatherData } from "../utils/weatherApi.js";
import { useState } from "react";
import { useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom";

function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [currentLocation, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        const temperatureF = `${Math.round(data.main.temp)}`;
        const temperatureC = `${Math.round(((data.main.temp - 32) * 5) / 9)}`;

        const temperature = {
          F: temperatureF,
          C: temperatureC,
        };
        setTemp(temperature[currentTemperatureUnit]);
        setLocation(data.name);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [currentTemperatureUnit]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  const handleSelectedItem = (item) => {
    setActiveModal("preview");
    setSelectedItem(item);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRadioButtons = (event) => {
    const radioButton = event.target;
    console.log(`Selected value: ${radioButton.value}`);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <Header
            onCreateModal={handleCreateModal}
            location={currentLocation}
          />
          <Switch>
            <Route exact path="/">
              <Main weatherTemp={temp} onSelectItem={handleSelectedItem} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </div>
        {activeModal === "create" && (
          <ModalWithForm
            title="New Garment"
            name="add-clothing"
            buttonText="Add garment"
            onClose={handleCloseModal}
          >
            <fieldset className="modal__inputs">
              <label className="modal__label">
                Name
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  minLength="1"
                  maxLength="20"
                />
              </label>
              <label className="modal__label">
                Image
                <input
                  className="modal__input"
                  type="url"
                  name="link"
                  placeholder="Image URL"
                  minLength="1"
                  maxLength="30"
                />
              </label>
            </fieldset>
            <p className="modal__weather-title">Select the weather type:</p>
            <fieldset className="modal__radio-buttons">
              <label className="modal__label">
                <input
                  className="modal__radio-button"
                  type="radio"
                  value="Hot"
                  id="hot"
                  name="weatherType"
                  onChange={handleRadioButtons}
                />
                Hot
              </label>
              <label className="modal__label">
                <input
                  className="modal__radio-button"
                  type="radio"
                  value="Warm"
                  id="warm"
                  name="weatherType"
                  onChange={handleRadioButtons}
                />
                Warm
              </label>
              <label className="modal__label">
                <input
                  className="modal__radio-button"
                  type="radio"
                  value="Cold"
                  id="cold"
                  name="weatherType"
                  onChange={handleRadioButtons}
                />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedItem={selectedItem} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
