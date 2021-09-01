import React, { Component } from "react";
import {news} from "../context"

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  state = {
      //type object data here
      news: news,
  };
  render() {
    return (
      <AppContext.Provider
        value={
          {
            //type data here
            news: this.props.news
          }
        }
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {AppProvider, AppConsumer}