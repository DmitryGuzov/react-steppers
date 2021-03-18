import React from "react";
import "./App.css";

import Stepper from "./components/stepper/index";
import StatusStepper from "./components/status-stepper";

function App() {
  const steps1 = [
    { title: "Initial" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: "Finish" },
  ];
  const steps2 = [
    { title: "Initial", status: true },
    { title: "Sent", status: true },
  ];
  return (
    <div className="App">
      <Stepper data={steps1} title="Registration" />
      <StatusStepper data={steps2} title="Status" />
    </div>
  );
}

export default App;
