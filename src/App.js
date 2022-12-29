import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          {/* <h1>This is iNotebook</h1> */}
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home key="home" />
              </Route>
              <Route exact path="/about">
                <About key="about" />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
