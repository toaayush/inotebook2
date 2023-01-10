
import UserContext from "./userContext";

const UserState = (props) => {
  const host = "http://localhost:5000";
  // Edit a User
  const editUser = async (id, name, email, password, age, gender, updated) => {
    // API Call
    const response = await fetch(`${host}/api/auth/updateuser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ id, name, email, password, age, gender }),
    });
    const json = await response.json();
    updated = json.success
    const updatedUser = json.user
    return {updated: updated, updatedUser: updatedUser};
  };
  

  return (
    <UserContext.Provider value={{ editUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
