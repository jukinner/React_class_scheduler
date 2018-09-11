import { FETCH_COURSES } from './types';

function fetchCourses() {
  return {
    action: FETCH_COURSES,
    payload: [
      {
        title: 'Problem Solving',
        description: 'Problem Solving'
      },
      {
        title: 'HTML/CSS Bootcamp',
        description: 'Learn HTML5 and CSS3 from scratch'
      },
      {
        title: 'UX for Developers',
        description: 'This User Experience (UX) course examins how to design an application'
      }
    ]
  }
}