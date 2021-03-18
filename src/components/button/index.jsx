import React from "react";

import "./index.css";

const Button = (props) => {
  return (
    <>
      <button
        disabled={props.disabled ? true : false}
        className="button"
        onClick={props.onClick ? props.onClick : null}
      >
        {props.text}
      </button>
    </>
  );
};
export default Button;
