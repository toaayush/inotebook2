import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import UpdateProfile from "./components/UpdateProfile";
import UserState from "./context/users/UserState";
import EditNote from "./components/EditNote";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <UserState showAlert={showAlert}>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home key="home" showAlert={showAlert} />
                </Route>
                <Route exact path="/editnote">
                  <EditNote key="editnote" showAlert={showAlert} />
                </Route>
                <Route exact path="/about">
                  <About key="about" />
                </Route>
                <Route exact path="/login">
                  <Login key="login" showAlert={showAlert} />
                </Route>
                <Route exact path="/signup">
                  <Signup key="signup" showAlert={showAlert} />
                </Route>
                <Route exact path="/updateprofile">
                  <UpdateProfile key="updateprofile" showAlert={showAlert} />
                </Route>
              </Switch>
            </div>
          </Router>
        </NoteState>
      </UserState>
    </>
  );
}

export default App;
