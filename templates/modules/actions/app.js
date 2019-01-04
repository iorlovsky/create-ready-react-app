const appJsAction = `
import * as types from "../types";


export const simpleAction = payload => ({
  type: types.SIMPLE_ACTION,
  payload
});
`;

module.exports = appJsAction;