import { FETCH_GITHUB } from '../actions/index';

export default function (state = [], action) {
  switch(action.type){
        case FETCH_GITHUB:
            return [action.payload.data, ...state]
        default:
    }
return state
}
