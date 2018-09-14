import { FETCH_COURSES } from '../actions/types';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:
            return [
                ...state, 
                ...action.payload
            ] 
        default:
          return state;
    }
}