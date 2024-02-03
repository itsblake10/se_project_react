import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer.js";
// import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import ItemModal from "./ItemModal/ItemModal.js";
import AddItemModal from "./AddItemModal/AddItemModal.js";
import { getWeatherData } from "../utils/weatherApi.js";
import { useState } from "react";
import { useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom";
import { getItems, addItem, deleteItem } from "../utils/api.js";
// import { defaultClothingItems } from "../utils/constants.js";

function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [currentLocation, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [modalOpen, setModalOpen] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);

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

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  const handleAddItemSubmit = (newItem) => {
    addItem(newItem.name, newItem.imageUrl, newItem.weather)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const handleCardDelete = () => {
    let newClothingItems = clothingItems.filter(
      (item) => item._id !== selectedItem._id
    );
    setClothingItems(newClothingItems);

    deleteItem(selectedItem._id)
      .then(() => {
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const handleSelectedItem = (item) => {
    setActiveModal("preview");
    setSelectedItem(item);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setModalOpen(false);
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
              <Main
                weatherTemp={temp}
                onSelectItem={handleSelectedItem}
                clothingItems={clothingItems}
              />
            </Route>
            <Route path="/profile">
              <Profile
                onCreateModal={handleCreateModal}
                onSelectItem={handleSelectedItem}
                clothingItems={clothingItems}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            isOpen={modalOpen}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedItem={selectedItem}
            onClose={handleCloseModal}
            onDeleteCard={handleCardDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
