import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialReducer } from './reducers/trialReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(initialReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;