const appjs = `
import React, { Component } from 'react';
import 'AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./app/router";
import {Provider} from "react-redux";
import {configure} from './app/modules/store/configureStore';

export const store = configure();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;`;

module.exports = appjs;