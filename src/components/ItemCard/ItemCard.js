import "./ItemCard.css";
import heartIcon from "../../images/heartIcon.svg";

const ItemCard = ({ item, onSelectItem }) => {
  return (
    <li className="item__card">
      <div className="item__card-info">
        <p className="item__card-name">{item.name}</p>
        <button className="item__card-like-button">
          <img className="item__card-heart" src={heartIcon} alt="Heart Icon" />
        </button>
      </div>
      <button className="item__card-button" onClick={() => onSelectItem(item)}>
        <img className="item__card-image" src={item.link} alt={item.name} />
      </button>
    </li>
  );
};

export default ItemCard;
