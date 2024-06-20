import React, { useContext } from "react";
import "./ItemCard.css";
import heartIcon from "../../images/heartIcon.svg";
import heartIconLiked from "../../images/heartIconLiked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { isAuthenticated } from "../../utils/auth";

const ItemCard = ({ item, onSelectItem, onItemLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((item) => item._id === currentUser._id);
  console.log(isLiked);

  const itemLikeButtonClassName = `item__card-like-button ${
    isLiked ? "item__card-like-button_liked" : ""
  }`;

  const handleLike = () => {
    onItemLike({ itemId: item._id, isLiked });
  };

  return (
    <li className="item__card">
      <div className="item__card-info">
        <p className="item__card-name">{item.name}</p>
        {isAuthenticated() && (
          <button className={itemLikeButtonClassName} onClick={handleLike}>
            <img
              className="item__card-heart"
              src={isLiked ? heartIconLiked : heartIcon}
              alt="Heart Icon"
            />
          </button>
        )}
      </div>
      <button className="item__card-button" onClick={() => onSelectItem(item)}>
        <img className="item__card-image" src={item.imageUrl} alt={item.name} />
      </button>
    </li>
  );
};

export default ItemCard;
