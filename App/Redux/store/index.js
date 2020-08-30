import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

const middleware = [promise];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(reducers, applyMiddleware(...middleware));
