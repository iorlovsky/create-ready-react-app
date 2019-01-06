const appJsReducer = `
import * as types from "../types";

const initialState = {
  global_test_state: ''
};

const app = (state=initialState, action) => {
  switch (action.type){
    case types.TEST_ACTION:
      return {...state, global_test_state: action.payload};

    default:
      return state;
  }
};

export default app;
`;

module.exports = appJsReducer;