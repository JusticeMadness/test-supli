import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import { cart } from './Reducers/cart';

const store = combineReducers({ cart });

const storeWithMiddleware = createStore(
	store,
    applyMiddleware(promise, thunk)
);

export default storeWithMiddleware;