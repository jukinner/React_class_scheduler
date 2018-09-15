import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">{ this.props.title }</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow" />
        <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action"/>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
            { this.props.description }
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(LibraryCourse);