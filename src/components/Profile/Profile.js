import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
};

export default Profile;
