const appJsReducer = `
import * as types from "../types";

const initialState = {};

const app = (state=initialState, action) => {
  switch (action.type){
    case types.SIMPLE_ACTION:
      return {...state, simple_action:action.payload};

    default:
      return state;
  }
};

export default app;
`;

module.exports = appJsReducer;