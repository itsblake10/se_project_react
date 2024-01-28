import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onCreateModal, onSelectItem, clothingItems }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectItem={onSelectItem}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
