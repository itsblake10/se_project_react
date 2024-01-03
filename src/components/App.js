import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import ItemModal from "./ItemModal/ItemModal.js";
import { useState } from "react";

function App() {
  const weatherTemp = "102";
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("inactive");

  const handleSelectedItem = (item) => {
    setActiveModal("preview");
    setSelectedItem(item);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("inactive");
  };

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectItem={handleSelectedItem} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          name=""
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
              />
              Hot
            </label>
            <label className="modal__label">
              <input
                className="modal__radio-button"
                type="radio"
                value="Warm"
                id="warm"
              />
              Warm
            </label>
            <label className="modal__label">
              <input
                className="modal__radio-button"
                type="radio"
                value="Cold"
                id="cold"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedItem={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
