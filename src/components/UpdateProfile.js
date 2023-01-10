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
    egender: "default",
  });
  const updateUser = (currentUser, pass) => {
    setUser({
      id: currentUser._id,
      ename: currentUser.name,
      eage: currentUser.age,
      eemail: currentUser.email,
      epassword: pass,
      ecpassword: pass,
      egender: currentUser.gender,
    });
  };
  useEffect(() => {
    const userdet = JSON.parse(localStorage.getItem("user"));
    const pass = localStorage.getItem("pass");
    updateUser(userdet, pass);
  }, []);

  const handleClick = async (e) => {
    let updated = false;
    if (user.epassword === user.ecpassword) {
      e.preventDefault();
      let update = await editUser(
        user.id,
        user.ename,
        user.eemail,
        user.epassword,
        user.eage,
        user.egender,
        updated
      );
      let updateTrue = update.updated;
      if (updateTrue) {
        props.showAlert("Updated Successfully", "success");
        history.push("/");
        localStorage.setItem("user", JSON.stringify(update.updatedUser));
        localStorage.setItem("pass", user.epassword);
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
  const onClick = () => {
    setUser(
      (user.egender = document.querySelector(
        'input[name="gender"]:checked'
      ).value)
    );
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
        <div className="d-flex" id="egender" name="egender" value={user.egender} onChange={onChange}>
        <label htmlFor="gender" className="form-label mx-3">
            Gender : 
          </label>
          <div className="mx-3 form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              onChange={onChange}
              onClick={onClick}
              checked = {(user.egender==="Male")?"checked":""}
            />
            <label className="form-check-label" htmlFor="egender">
              Male
            </label>
          </div>
          <div className="mx-3 form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              onChange={onChange}
              onClick={onClick}
              checked = {(user.egender==="Female")?"checked":""}
            />
            <label className="form-check-label" htmlFor="egender">
              Female
            </label>
          </div>
          <div className="mx-3 form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Prefer not to say"
              value="Prefer not to say"
              onChange={onChange}
              onClick={onClick}
              checked = {(user.egender==="Prefer not to say")?"checked":""}
            />
            <label className="form-check-label" htmlFor="egender">
              Prefer not to say
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
