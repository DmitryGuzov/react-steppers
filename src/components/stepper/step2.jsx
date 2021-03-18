import React from "react";

const Step2 = (props) => {
  const handleChangeAge = (event) => {
    props.handleChangeAge(event.target.value);
  };
  return (
    <>
      <div className="step-two">
        <h2>Username: {props.username}</h2>
        Age:{" "}
        <input type="number" value={props.age} onChange={handleChangeAge} />
      </div>
    </>
  );
};

export default Step2;
