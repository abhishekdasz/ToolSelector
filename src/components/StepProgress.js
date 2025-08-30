import React from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import "./VerticalStatusStepper.css";   // our single CSS file

const StepProgress = () => {
  return (
<div className="vertical-container">
      <ProgressBar
        percent={66}   // 0 = start, 50 = middle, 100 = end
        filledBackground="linear-gradient(to bottom, #3b82f6, #10b981)"
        unfilledBackground="#ddd"
        width="4px"
        height="100%"
      >
        <Step>
          {({ accomplished }) => (
            <div className="step-row">
              <div className={`circle ${accomplished ? "active" : ""}`}>✔</div>
              <span className="label">Start</span>
            </div>
          )}
        </Step>

        <Step>
          {({ accomplished }) => (
            <div className="step-row">
              <div className={`circle ${accomplished ? "active" : ""}`}>⟳</div>
              <span className="label">Progress</span>
            </div>
          )}
        </Step>

        <Step>
          {({ accomplished }) => (
            <div className="step-row">
              <div className={`circle ${accomplished ? "active" : ""}`}>✔</div>
              <span className="label">End</span>
            </div>
          )}
        </Step>

                <Step>
          {({ accomplished }) => (
            <div className="step-row">
              <div className={`circle ${accomplished ? "active" : ""}`}>✔</div>
              <span className="label">End2</span>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}

export default StepProgress