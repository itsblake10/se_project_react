import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants.js";

const ClothesSection = () => {
  return (
    <div className="clothes-section__container">
      <div className="clothes-section__top-container">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-button">+ Add new</button>
      </div>
      <ul className="clothes-section__list">
        {defaultClothingItems.map((item) => (
          <ItemCard item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
