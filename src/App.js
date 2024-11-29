import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    //  let word= type.toLowerCase();
    //  let newword = word.charAt(0).toUpperCase() + word.slice(1);

    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (mod) => {
    setMode(mod);
    console.log(
      "I am in Toggle Mode Function  MOd ->  " + mod + " Mode:-  " + mode
    );

    if (mod === "dark") {
      document.body.style.backgroundColor = "#05092b";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils-DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode Enables ";
      // }, 2000);
    } else if (mod === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#05092b";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils-LightMode";
    } else {
      if (mod === "blue") {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        showAlert("Blue Mode Enabled", "success");
        document.title = "TextUtils-BlueMode";
      }
    }
    console.log(
      "I am in Toggle Mode Function  MOd ->  " + mod + " Mode:-  " + mode
    );
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route
              path="/"
              exact
              element={
                <TextForm
                  heading="Write text here to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            {/* <Route path="/">
              <TextForm
                heading="Write text here to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
