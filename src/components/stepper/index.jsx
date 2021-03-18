import React from "react";

import "./index.css";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Button from "../button";

const initialSteps = [
  { title: "Initial" },
  { title: "Step 2" },
  { title: "Step 3" },
  { title: "Finish" },
];

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      steps: props.data.length ? props.data : initialSteps,
      username: "",
      age: 0,
      position: "",
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  componentDidMount() {}
  handleNextStep() {
    if (this.state.step === 1) {
      if (this.state.username.trim() !== "") {
        this.setState({ step: this.state.step + 1 });
      }
    }
    if (this.state.step === 2) {
      if (this.state.age > 0) {
        this.setState({ step: this.state.step + 1 });
      }
    }
    if (this.state.step === 3) {
      if (this.state.position.trim() !== "") {
        this.setState({ step: this.state.step + 1 });
      }
    }
  }
  handleChangeUsername(value) {
    this.setState({ username: value });
  }
  handleChangeAge(value) {
    this.setState({ age: value });
  }
  handleChangePosition(value) {
    this.setState({ position: value });
  }
  handlePreviousStep() {
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1 });
    }
  }
  handleCreate() {
    alert(
      `Done! ${this.state.username}, ${this.state.age}, ${this.state.position}`
    );
  }
  render() {
    const { step, steps } = this.state;
    const { title } = this.props;
    return (
      <>
        <div className="stepper">
          <h1>{title}</h1>
          <div className="stepper-line">
            {steps.map((stepper, index) => {
              return (
                <div
                  key={index}
                  className={
                    steps.length === step
                      ? "step-block done"
                      : index < step
                      ? "step-block active"
                      : "step-block disabled"
                  }
                >
                  <span
                    className={
                      steps.length === step
                        ? "step-count done"
                        : index < step
                        ? "step-count active"
                        : "step-count disabled"
                    }
                  >
                    {index + 1}
                  </span>
                  <p>{stepper.title}</p>
                </div>
              );
            })}
          </div>
          <div className="button-group">
            <br />
            <Button
              disabled={step === 1}
              text="Back"
              onClick={this.handlePreviousStep}
            />
            <Button
              disabled={step === steps.length}
              text="Next"
              onClick={this.handleNextStep}
            />
          </div>
          <div>
            {this.state.step === 1 ? (
              <Step1
                username={this.state.username}
                handleChangeUsername={this.handleChangeUsername}
              />
            ) : null}
            {this.state.step === 2 ? (
              <Step2
                username={this.state.username}
                age={this.state.age}
                handleChangeAge={this.handleChangeAge}
              />
            ) : null}
            {this.state.step === 3 ? (
              <Step3
                username={this.state.username}
                age={this.state.age}
                position={this.state.position}
                handleChangePosition={this.handleChangePosition}
              />
            ) : null}
            {this.state.step === 4 ? (
              <Step4
                username={this.state.username}
                age={this.state.age}
                position={this.state.position}
              />
            ) : null}
            {this.state.step === 4 ? (
              <Button text="Save" onClick={this.handleCreate} />
            ) : null}
          </div>
        </div>
        <div></div>
      </>
    );
  }
}

export default Stepper;
