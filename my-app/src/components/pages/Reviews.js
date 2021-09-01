import React, { Component } from "react";
import ReviewCard from "./ReviewCard";
import { InfoConsumer } from ".././context";

class Reviws extends Component {
  state = {};
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          return data.reviews.map((person) => {
            return <ReviewCard key={person.id} person={person} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default Reviws;
