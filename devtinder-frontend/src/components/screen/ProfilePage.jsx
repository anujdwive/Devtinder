import Profile from "./Profile";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Profile user={user} isOwnProfile={true} />
    </div>
  );
};

export default ProfilePage;
