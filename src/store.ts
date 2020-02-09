import {createStore, combineReducers} from 'redux';
import {toggleModal} from './reducers';

const rootReducer = combineReducers({toggleModal});

const configureStore = () => createStore(rootReducer);

export default configureStore;
