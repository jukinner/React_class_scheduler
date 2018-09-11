import React, { Component } from 'react';

class ProgressTracker extends Component {
  render() {
    return (
      <div className="pogress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker_percentage">
          0%
        </div>
      </div>
    )
  }
}

export default ProgressTracker;