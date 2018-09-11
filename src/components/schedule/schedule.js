import React, { Component } from 'react';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';

class Schedule extends Component {
  render() {
    return (
        <div className="schedule">
          <h1 className="schedule_title">My Schedule</h1>
          <ScheduleCourse title={'ProblemSolving'}/>
          <ScheduleCourse title={'ProblemSolving'}/>
          <ScheduleCourse title={'ProblemSolving'}/>
          <Gradient/>
        </div>
      )
  }
}

export default Schedule;