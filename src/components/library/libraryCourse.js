import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action'

class LibraryCourse extends Component {
	render () {
		return (
			<div className = 'library-course'>
				<div className="library-course__title-check">
					<label className="library-course__title">{ this.props.title }</label>
					{ Icon('fas fa-check', 'library-course__icon') }
				</div>
				<Arrow className="library-course__arrow" />
				<Action className="library-course__action"/>
				{ Icon("fas fa-plus-circle", 'library-course__action') }
					<div className="library-course__description">
						<label>Course Descrption</label>
						<p>{ this.props.description } </p>
					</div>

			</div>
		)
	}
}

export default LibraryCourse;