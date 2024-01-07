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
        <p className="item__modal-garment-type">{selectedItem.name}</p>
        <p className="item__modal-weather">weather: {selectedItem.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
