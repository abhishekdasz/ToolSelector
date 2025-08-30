import React, { useState } from 'react'
import "./ProgressBarToggle.css";
import StepProgress from './StepProgress';

const ProgressBarToggle = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="progress-toggle-container">
      <div className="toggle-header" onClick={() => setOpen(!open)}>
        <span>{open ? "Hide Progress Bar" : "Show Progress Bar"}</span>
        <span className="arrow">{open ? "↑" : "↓"}</span>
      </div>

      {open && (
        <div className="stepper-wrapper">
          <StepProgress />
        </div>
      )}
    </div>
  )
}

export default ProgressBarToggle