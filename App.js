import React, { Component } from "react";
import { Provider } from "mobx-react";
import Home from "./src/Home";
import {CounterStore, UserStore} from "./src/stores";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const stores = {
      userStore: UserStore, 
      counterStore: CounterStore,
    }

    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    );
  }
}