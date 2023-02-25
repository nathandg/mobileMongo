import {createStore, combineReducers} from 'redux';
import AccountReducer from './reducer/AccountReducer';

const rootReducer = combineReducers({
  account: AccountReducer,
});

const store = createStore(rootReducer);
export default store;
