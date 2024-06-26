import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  onCreateModal,
  onSelectItem,
  clothingItems,
  onItemLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser || !clothingItems) {
    return null;
  }

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section__container">
      <div className="clothes-section__top-container">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-button" onClick={onCreateModal}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {userClothingItems.map((item) => (
          <ItemCard
            item={item}
            key={item._id}
            onSelectItem={onSelectItem}
            onItemLike={onItemLike}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
