import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is Converted to UpperCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCleClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };
  const handleOnLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is Converted to LowerCase", "success");
  };
  const handleRevClick = () => {
    let newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
      newString += text[i];
    }
    setText(newString);
    props.showAlert("Text is Converted to Reverese", "success");
  };
  const handleExSpClick = () => {
    let newString = text.split(/[ ]+/).join(" ");

    setText(newString);
    props.showAlert("Extra space is removed from text", "success");
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container m-4">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control mb-1 "
          value={text}
          onChange={handleOnChange}
          id="myTextBox"
          rows="8"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "black",
          }}
        ></textarea>

        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleOnUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleOnLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleCleClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleRevClick}
        >
          Reverse Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={handleExSpClick}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container">
        <h2> Text Details</h2>
        <p>
          Sentence Count : <b>{text.split(".").length - 1} </b>
        </p>
        <p>
          Word Count : <b> {text.trim().split(/\s+/).length} </b>
        </p>
        <p>
          Character Count with space : <b>{text.length}</b>
        </p>
        <p>
          Character Count without space :
          <b>{text.length - text.trim().split(" ").length}</b>
        </p>

        <h3>Preview</h3>
        <p className="container" style={{ border: "1px solid grey" }}>
          {text.length > 0 ? text : "Enter Text to preview here"}
        </p>
      </div>
    </>
  );
}
