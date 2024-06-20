import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onCreateModal,
  onEditProfileModal,
  onSignout,
  onSelectItem,
  clothingItems,
  onItemLike,
}) => {
  return (
    <div className="profile">
      <SideBar onEditProfileModal={onEditProfileModal} onSignout={onSignout} />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectItem={onSelectItem}
        clothingItems={clothingItems}
        onItemLike={onItemLike}
      />
    </div>
  );
};

export default Profile;
