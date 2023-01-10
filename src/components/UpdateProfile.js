import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../context/users/userContext";

function UpdateProfile(props) {
  const context = useContext(userContext);
  let history = useHistory();
  const { editUser } = context;
  const [user, setUser] = useState({
    id: "",
    ename: "",
    eemail: "",
    epassword: "",
    ecpassword: "",
    eage: "default",
  });
  const updateUser = (currentUser, pass) => {
    // console.log(currentUser);
    setUser({
      id: currentUser._id,
      ename: currentUser.name,
      eage: currentUser.age,
      eemail: currentUser.email,
      epassword: pass,
      ecpassword: pass,
    });
  };
  useEffect(() => {
    const userdet = JSON.parse(localStorage.getItem("user"));
    const pass = localStorage.getItem("pass");
    updateUser(userdet, pass);
  }, []);

  const handleClick = async (e) => {
    let updated = false
    if (user.epassword === user.ecpassword) {
      e.preventDefault();
      // console.log("Updating the user...", user);
      // console.log(editUser(user.id, user.ename, user.eemail, user.epassword, user.eage, updated));
      let updateTrue = await editUser(user.id, user.ename, user.eemail, user.epassword, user.eage, updated);
      console.log(updateTrue)
      if (updateTrue) {
        props.showAlert("Updated Successfully", "success");
        history.push("/");
        // console.log(updatedDetail)
      } else {
        props.showAlert("Cannot Update", "danger");
      }
    } else {
      props.showAlert("Password does not match", "danger");
    }
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2 className="my-2">Update your profile details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ename"
            name="ename"
            onChange={onChange}
            value={user.ename}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="eage"
            name="eage"
            onChange={onChange}
            value={user.eage}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="eemail"
            name="eemail"
            onChange={onChange}
            value={user.eemail}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="epassword"
            name="epassword"
            onChange={onChange}
            value={user.epassword}
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="ecpassword"
            name="ecpassword"
            onChange={onChange}
            value={user.ecpassword}
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
