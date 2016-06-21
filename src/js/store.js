import { createStore, combineReducers, applyMiddleware } from 'redux';
import todos from './reducers/todosReducer';
import visibilityFilter from './reducers/visibilityFilterReducer';

//middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

const middleware = [logger, thunk];

const reducer = combineReducers({ todos, visibilityFilter });

const store = createStore(
  reducer,
  {},
  applyMiddleware(...middleware)
);

export default store;
