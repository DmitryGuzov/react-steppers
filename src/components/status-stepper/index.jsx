import React from "react";

import "./index.css";

class StatusStepper extends React.Component {
  render() {
    const steps = this.props.data;
    return (
      <>
        <div className="status-stepper">
          <h2>{this.props.title}</h2>
          <div className="stepper-line">
            {steps.map((stepper, index) => {
              return (
                <div
                  key={index}
                  className={
                    steps[steps.length - 1].status === true
                      ? "step-block done"
                      : stepper.status
                      ? "step-block active"
                      : "step-block disabled"
                  }
                >
                  <span
                    className={
                      steps[steps.length - 1].status === true
                        ? "step-count done"
                        : stepper.status
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
        </div>
      </>
    );
  }
}

export default StatusStepper;
