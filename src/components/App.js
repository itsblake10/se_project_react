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
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Route, Switch } from "react-router-dom";
import {
  getItems,
  addItem,
  deleteItem,
  editUserProfile,
  addItemLike,
  removeItemLike,
} from "../utils/api.js";
import { signIn, signUp, checkToken } from "../utils/auth.js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import RegisterModal from "./RegisterModal/RegisterModal.js";
import LoginModal from "./LoginModal/LoginModal.js";
import EditProfileModal from "./EditProfileModal/EditProfileModal.js";
import { useHistory } from "react-router-dom";

function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [currentLocation, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

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

  // NEW
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log(token);
    if (token) {
      checkToken(token)
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
        })
        .catch((error) => {
          console.error("Error during token validation:", error);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // NEW
  const handleAddItemSubmit = (newItem) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, user might not be authenticated");
      return;
    }

    setIsLoading(true);
    addItem(newItem.name, newItem.imageUrl, newItem.weather, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      })
      .finally(() => setIsLoading(false));
  };

  // NEW
  const handleCardDelete = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, user might not be authenticated");
      return;
    }

    setIsLoading(true);
    deleteItem(selectedItem._id, token)
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

  // NEW HANDLE EDIT PROFILE
  const handleEditProfile = (newUserData) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, user might not be authenticated");
      return;
    }
    setIsLoading(true);
    editUserProfile(newUserData.name, newUserData.avatar, token)
      .then(() => {
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error changing profile data:", error);
      })
      .finally(() => setIsLoading(false));
  };

  // NEW SIGN UP
  const handleSignUp = (newUser) => {
    setIsLoading(true);
    signUp({
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
      avatarUrl: newUser.avatarUrl,
    })
      .then(() => {
        handleLogin({ email: newUser.email, password: newUser.password });
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error during sign up:", error);
      })
      .finally(() => setIsLoading(false));
  };

  // NEW LOG IN
  const handleLogin = (user) => {
    setIsLoading(true);
    signIn(user.email, user.password)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error during login:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // NEW
  const handleItemLike = ({ itemId, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, user might not be authenticated");
      return;
    }

    const updateItems = (updatedItem) => {
      setClothingItems((prevItems) =>
        prevItems.map((item) => (item._id === itemId ? updatedItem : item))
      );
    };

    if (!isLiked) {
      addItemLike(itemId, token)
        .then((data) => {
          console.log(data);
          updateItems(data);
        })
        .catch((err) => console.log(err));
    } else {
      removeItemLike(itemId, token)
        .then((data) => {
          console.log(data);
          updateItems(data);
        })
        .catch((err) => console.log(err));
    }
  };

  // NEW SIGNOUT
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/");
  };

  const handleSelectedItem = (item) => {
    setActiveModal("preview");
    setSelectedItem(item);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  //NEW
  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  //NEW
  const handleLoginModal = () => {
    setActiveModal("login");
  };

  //NEW
  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
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
        <CurrentUserContext.Provider value={{ currentUser }}>
          <div className="page">
            <Header
              onRegisterModal={handleRegisterModal}
              onCreateModal={handleCreateModal}
              onLoginModal={handleLoginModal}
              location={currentLocation}
              isLoggedIn={isLoggedIn}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weatherTemp={temp}
                  onSelectItem={handleSelectedItem}
                  clothingItems={clothingItems}
                  onItemLike={handleItemLike}
                />
              </Route>
              <ProtectedRoute
                path="/profile"
                component={(props) => (
                  <Profile
                    {...props}
                    onCreateModal={handleCreateModal}
                    onEditProfileModal={handleEditProfileModal}
                    onSignout={handleSignOut}
                    onSelectItem={handleSelectedItem}
                    clothingItems={clothingItems}
                    onItemLike={handleItemLike}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
          {activeModal === "edit" && (
            <EditProfileModal
              onClose={handleCloseModal}
              // Change?
              onSubmit={handleEditProfile}
              buttonText={isLoading ? "Loading..." : "Save Changes"}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onSignUp={handleSignUp}
              buttonText={isLoading ? "Loading..." : "Sign Up"}
              buttonTwoText={"or Log In"}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              onLogin={handleLogin}
              buttonText={isLoading ? "Loading..." : "Log In"}
              buttonTwoText={"or Sign Up"}
            />
          )}
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
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
