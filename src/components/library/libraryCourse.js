import React, { Component } from 'react';

class LibraryCourse extends Component {
	render () {
		return (
			<div className = 'library-course'>
				<label className="library-course__title">Problem Solving</label>
				{/* icon component */}
				{/* arrow component */}
				{/* action button component */}
					<div className="library-course__description">
						<label>Course Descrption</label>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
					</div>

			</div>
		)
	}
}

export default LibraryCourse;