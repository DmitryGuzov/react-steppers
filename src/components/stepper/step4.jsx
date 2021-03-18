import React from "react";

const Step4 = (props) => {
  return (
    <>
      <div className="step-four">
        <h2>Username: {props.username}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Position: {props.position}</h2>
      </div>
    </>
  );
};

export default Step4;
