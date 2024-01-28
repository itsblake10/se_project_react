import "./ItemModal.css";

const ItemModal = ({ selectedItem, onClose }) => {
  return (
    <div className="modal">
      <div className="item__modal-container">
        <button className="item__modal-close-button" onClick={onClose}></button>
        <img
          className="item__modal-garment-image"
          src={selectedItem.link}
          alt={selectedItem.name}
        />
        <div className="item__modal-description">
          <div className="item__modal-descriptions">
            <p className="item__modal-garment-type">{selectedItem.name}</p>
            <p className="item__modal-weather">
              weather: {selectedItem.weather}
            </p>
          </div>
          <button className="item__modal-delete-button">Delete item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
