const appJsAction = `
import * as types from "../types";


export const testAction = payload => ({
  type: types.TEST_ACTION,
  payload
});
`;

module.exports = appJsAction;