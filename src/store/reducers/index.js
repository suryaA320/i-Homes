import { combineReducers } from 'redux';

import auth from './auth';
import message from './message';

const reducers = combineReducers({ auth, message });

export default reducers;
