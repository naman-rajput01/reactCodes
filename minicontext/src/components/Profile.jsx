import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {user.username}</p>
    </div>
  );
};

export default Profile;
