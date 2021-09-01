import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoContext = React.createContext();
const InfoConsumer = InfoContext.Consumer;

class InfoProvider extends Component {
  state = {
    placeInfo: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
  };

  getItem = (id) => {
    const item = this.state.placeInfo.find((item) => item.id === id);
    return item;
  };
  handleItem = (id) => {
    const item= this.getItem(id);
    this.setState(() => {
   return {
    detailInfo: item
   }
    })
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          placeInfo: this.state.placeInfo,
          reviews: this.state.reviews,
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
          handleItem:this.handleItem,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

export { InfoProvider, InfoConsumer };
