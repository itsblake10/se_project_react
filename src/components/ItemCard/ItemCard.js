import "./ItemCard.css";
// import { useState } from "react";

function handleLikeButton() {
  console.log("Liked!");
}

// function handleCardClick() {
//   console.log("Clicked!");
// }

const ItemCard = ({ item, onSelectItem }) => {
  return (
    <>
      <li className="item__card" key={item._id}>
        <div className="item__card-info">
          <p className="item__card-name">{item.name}</p>
          <button className="item__card-like-button" onClick={handleLikeButton}>
            <img
              className="item__card-heart"
              src={require("../../images/heartIcon.svg").default}
              alt="Heart Icon"
            />
          </button>
        </div>
        <button
          className="item__card-button"
          onClick={() => onSelectItem(item)}
        >
          <img className="item__card-image" src={item.link} alt="Garment" />
        </button>
      </li>
    </>
  );
};

export default ItemCard;
