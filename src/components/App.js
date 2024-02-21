import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer.js";
import ItemModal from "./ItemModal/ItemModal.js";
import AddItemModal from "./AddItemModal/AddItemModal.js";
import { getWeatherData } from "../utils/weatherApi.js";
import { useState } from "react";
import { useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { Route, Switch } from "react-router-dom";
import { getItems, addItem, deleteItem } from "../utils/api.js";

function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [currentLocation, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        const temperatureF = `${Math.round(data.main.temp)}`;
        const temperatureC = `${Math.round(((data.main.temp - 32) * 5) / 9)}`;

        const temperatures = {
          F: temperatureF,
          C: temperatureC,
        };

        setTemp(temperatures[currentTemperatureUnit]);

        setLocation(data.name);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

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
    setIsLoading(true);
    addItem(newItem.name, newItem.imageUrl, newItem.weather)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCardDelete = () => {
    setIsLoading(true);
    deleteItem(selectedItem._id)
      .then(() => {
        const newClothingItems = clothingItems.filter(
          (item) => item._id !== selectedItem._id
        );
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      })
      .finally(() => setIsLoading(false));
  };

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

  const handleToggleSwitchChange = () => {
    // currentTemperatureUnit === "F"
    //   ? setCurrentTemperatureUnit("C")
    //   : setCurrentTemperatureUnit("F");

    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
      const newTempC = Math.round(((temp - 32) * 5) / 9);

      setTemp(newTempC);
    } else {
      setCurrentTemperatureUnit("F");
      const newTempF = Math.round((temp * 9) / 5 + 32);

      setTemp(newTempF);
    }
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
            onAddItem={handleAddItemSubmit}
            buttonText={isLoading ? "Saving..." : "Add item"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedItem={selectedItem}
            onClose={handleCloseModal}
            onDeleteCard={handleCardDelete}
            buttonText={isLoading ? "Saving..." : "Delete item"}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
