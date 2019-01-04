const configureStoreJs = `
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as form} from "redux-form";
import app from "../reducers/app";

const rootReducer = combineReducers({
  app,
  form,
});

export const configure = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
  ));
};
`;

module.exports = configureStoreJs;