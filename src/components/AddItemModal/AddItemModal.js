import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState({});

  useEffect(() => {
    if (isOpen === true) {
      setItemName("");
      setImageUrl("");
      setWeatherType("");
    }
  }, [isOpen]);

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleWeatherTypeChange = (event) => {
    setWeatherType(event.target.value);
  };

  const newItem = {
    name: itemName,
    imageUrl: imageUrl,
    weather: weatherType,
  };

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(newItem);
  }

  return (
    <ModalWithForm
      title="New Garment"
      name="add-clothing"
      buttonText="Add garment"
      onClose={onClose}
      onSubmit={handleSubmit}
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
            onChange={handleNameChange}
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
            maxLength="1000"
            onChange={handleImageUrlChange}
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
            onChange={handleWeatherTypeChange}
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
            onChange={handleWeatherTypeChange}
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
            onChange={handleWeatherTypeChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
