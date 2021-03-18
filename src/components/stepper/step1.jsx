import React from "react";

const Step1 = (props) => {
  const handleChangeUsername = (event) => {
    props.handleChangeUsername(event.target.value);
  };
  return (
    <>
      <div className="step-one">
        <input
          type="text"
          value={props.username}
          onChange={handleChangeUsername}
        />
      </div>
    </>
  );
};

export default Step1;
