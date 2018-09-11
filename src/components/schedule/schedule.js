import React, { Component } from 'react';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker.js';

class Schedule extends Component {
  render() {
    return (
        <div className="schedule">
          <h1 className="schedule_title">My Schedule</h1>
          <ScheduleCourse title={'ProblemSolving'}/>
          <ScheduleCourse title={'ProblemSolving'}/>
          <ScheduleCourse title={'ProblemSolving'}/>
          <ProgressTracker/>
          <Gradient/>
        </div>
      )
  }
}

export default Schedule;