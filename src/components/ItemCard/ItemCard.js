import "./ItemCard.css";

function handleLikeButton() {
  console.log("Liked!");
}

function handleCardClick() {
  console.log("Clicked!");
}

const ItemCard = ({ item }) => {
  return (
    <>
      <li className="item__card">
        <div className="item__card-info">
          <p className="item__card-name">{item.name}</p>
          <button className="item__card-like-button" onClick={handleLikeButton}>
            <img
              className="item__card-heart"
              src="/images/heartIcon.svg"
              alt="Heart Icon"
            />
          </button>
        </div>
        <button className="item__card-button" onClick={handleCardClick}>
          <img className="item__card-image" src={item.link} alt="Garment" />
        </button>
      </li>
    </>
  );
};

export default ItemCard;
