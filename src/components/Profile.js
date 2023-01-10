import React from "react";
import { Link, useHistory } from "react-router-dom";
import Prof from "./Prof";

const Profile = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <Link to="/">
        <Prof />
      </Link>
      <Link to="/updateprofile" className="btn btn-primary mx-2">
        Update Profile
      </Link>
      <button onClick={handleLogout} className="btn btn-primary mx-2">
        Logout
      </button>
    </>
  );
};

export default Profile;
