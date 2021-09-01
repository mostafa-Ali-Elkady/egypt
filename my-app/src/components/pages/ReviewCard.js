import React, { Component } from "react";
import { InfoConsumer } from ".././context";

class ReviewCard extends Component {
  state = {};
  render() {
    const { id, name, avatar, comment } = this.props.person;

    return (
      <InfoConsumer>
        {(data) => {
          return (
            <div className="container">
              <div class="media mt-5">
                <img
                  src={avatar}
                  class="mr-3"
                  alt={name}
                  style={{ width: "40px" }}
                />
                <div class="media-body"
                id={id}>
                  <h5 class="mt-0">{name}</h5>
                  <p>{comment}</p>
                </div>
              </div>
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default ReviewCard;
