import React from "react";
import "./Box.css";

function InputBox(props) {
  return (
    <div className="main">
      <div className="InputContainer">
        <input
          type="text"
          name="text"
          className="input"
          id="input"
          placeholder="Search"
          onChange={(e) => props.setRoll(e.target.value.toUpperCase())}
        />

        <div className="border" />
        <button
          className="micButton"
          onClick={() => {
            props.sendfunction();
            props.setRender(props.render + 1);
          }}
        >
          <svg viewBox="0 0 512 512" className="searchIcon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default InputBox;
