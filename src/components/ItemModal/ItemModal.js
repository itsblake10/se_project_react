import "./ItemModal.css";
import { isAuthenticated } from "../../utils/auth";
import React from "react";

const ItemModal = ({ selectedItem, onClose, onDeleteCard, buttonText }) => {
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
          {isAuthenticated() && (
            <button className="item__delete-button" onClick={onDeleteCard}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
