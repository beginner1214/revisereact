import React from "react";
import Contact from "./contact";

const Profile = ({ name, email, count, onRename, onIncrement }) => {
  return (
    <div>
      <h3>Profile</h3>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <button onClick={onRename}>Update Name</button>
      <Contact
        name={name}
        email={email}
        count={count}
        onIncrement={onIncrement}
      />
    </div>
  );
};

export default Profile;
