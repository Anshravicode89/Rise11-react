import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const steps = [
    { stepNumber: "01", label: "Preliminary", completed: true },
    { stepNumber: "02", label: "Your Details", completed: true },
    { stepNumber: "03", label: "KYC", completed: true },
    { stepNumber: "04", label: "Parties", completed: false, approximateTime: "Approx 5 Min" },
    { stepNumber: "05", label: "Claim", completed: false, approximateTime: "Approx 5 Min" },
    { stepNumber: "06", label: "Review", completed: false, approximateTime: "Approx 5 Min" },
    { stepNumber: "07", label: "Payment", completed: false, approximateTime: "Approx 5 Min" },
  ];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`progress-step ${step.completed ? "completed" : "faded"}`}
        >
          <div className="step-content">
            <div className="step-number">
              {step.completed ? (
                <span className="tick">&#10003;</span>
              ) : (
                <span>{step.stepNumber}</span>
              )}
            </div>
            <div className="step-label">
              {step.label}
              {step.approximateTime && <div className="approx-time">({step.approximateTime})</div>}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`line ${
                index === 2
                  ? "dotted-line"
                  : step.completed
                  ? "completed-line"
                  : "faded-line"
              } ${index === 1 & 2 ? "no-line" : ""}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
