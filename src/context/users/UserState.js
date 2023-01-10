import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [updatedDetail, setUpdatedDetail] = useState([])
  // const [updated, setUpdated] = useState(false)
  const host = "http://localhost:5000";
  // Edit a User
  const editUser = async (id, name, email, password, age, updated) => {
    // API Call
    const response = await fetch(`${host}/api/auth/updateuser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, email, password, age }),
    });
    const json = await response.json();
    setUpdatedDetail(json.user);
    // setUpdated(true);
    updated = json.success
    console.log(json.success)
    // console.log(updated)
    return updated;
  };
  

  return (
    <UserContext.Provider value={{ updatedDetail, editUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
