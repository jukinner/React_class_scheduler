import React, { Component } from 'react';

class ProgressTracker extends Component {

  calculateProgress = function () {
    return (this.props.amountEnrolled / this.props.amountPossible) * 100;
  }.bind(this);

  render() {
    return (
      <div className="pogress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker_percentage">
          {this.calculateProgress()}%
        </div>
      </div>
    )
  }
}

export default ProgressTracker;