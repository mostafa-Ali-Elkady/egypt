import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from './Info';


class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {(value) => {
              return value.placeInfo.map(item => {
                  return <Info key={item.id} item={item}/>
              })
            }}
          </InfoConsumer>
         
        </div>
      </div>
    );
  }
}

export default Home;
