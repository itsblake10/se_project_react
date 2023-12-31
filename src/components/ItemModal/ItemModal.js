import "./ItemModal.css";

const ItemModal = () => {
  return (
    <div className="item__modal">
      <div className="item__modal-container">
        <button className="item__modal-close-button"></button>
        <img
          className="item__modal-garment-image"
          //   src={item.link}
          alt="Garment"
        />
        <p className="item__modal-garment-type">#Cap#</p>
        <p className="item__modal-weather">weather: #Hot#</p>
      </div>
    </div>
  );
};

export default ItemModal;
