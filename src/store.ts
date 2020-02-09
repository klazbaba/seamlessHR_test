import {createStore, combineReducers} from 'redux';
import {toggleModal, toggleBackgroundColor} from './reducers';

const rootReducer = combineReducers({toggleModal, toggleBackgroundColor});

const configureStore = () => createStore(rootReducer);

export default configureStore;
