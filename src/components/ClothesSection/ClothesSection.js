import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants.js";

const ClothesSection = ({ onCreateModal, onSelectItem, clothingItems }) => {
  return (
    <div className="clothes-section__container">
      <div className="clothes-section__top-container">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-button" onClick={onCreateModal}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item, index) => (
          <ItemCard
            item={item}
            key={`unique-id${index}`}
            onSelectItem={onSelectItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
