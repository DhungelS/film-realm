import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesApiReducer  from './reducers/moviesReducer'

const rootReducer = combineReducers({
  movies: moviesApiReducer
});

const middlewares =[thunk]

let composeEnhancers = composeEnhancers;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
};

export default configureStore;