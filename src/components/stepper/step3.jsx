import React from "react";

const Step3 = (props) => {
  const handleChangePosition = (event) => {
    props.handleChangePosition(event.target.value);
  };
  return (
    <>
      <div className="step-three">
        <h2>Username: {props.username}</h2>
        <h2>Age: {props.age}</h2>
        Position:
        <input
          type="text"
          value={props.position}
          onChange={handleChangePosition}
        />
      </div>
    </>
  );
};

export default Step3;
