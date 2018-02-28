import { combineReducers } from 'redux';
import GithubReducer from './reducer_profile';

const rootReducer = combineReducers({
  user: GithubReducer
});

export default rootReducer;
