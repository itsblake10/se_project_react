import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

// NEW
const ItemModal = ({ selectedItem, onClose, onDeleteCard, buttonText }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = selectedItem.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <div className="modal item">
      <div className="item__modal-container">
        <button className="item__modal-close-button" onClick={onClose}></button>
        <img
          className="item__modal-garment-image"
          src={selectedItem.imageUrl}
          alt={selectedItem.name}
        />
        <div className="item__modal-description">
          <div className="item__modal-descriptions">
            <p className="item__modal-garment-type">{selectedItem.name}</p>
            <p className="item__modal-weather">
              weather: {selectedItem.weather}
            </p>
          </div>
          <button className={itemDeleteButtonClassName} onClick={onDeleteCard}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
