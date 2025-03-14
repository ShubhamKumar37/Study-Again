import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const steps = [
  "Course Information",
  "Course Builder",
  "Publish",
];

const CustomStepper = ({ ActiveStep }) => {
  return (
    <ProgressBar
      percent={(ActiveStep / (steps.length - 1)) * 100}
      filledBackground='#FFD60A'
      height='1px'
    >
      {steps.map((label, index) => (
        <Step key={index}>
          {({ accomplished, position }) => (
            <div
              style={{
                color: accomplished ? "#000814" : "#FFD60A",
                background: accomplished ? "#FFD60A" : "#000814",
                padding: "8px 12px",
                borderRadius: "50%",
                textAlign: "center",
                border: "1px solid #FFD60A",
              }}
            >
              {accomplished && ActiveStep !== index ? `✓`: index + 1}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default CustomStepper;
