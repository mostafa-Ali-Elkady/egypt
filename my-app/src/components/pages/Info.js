import React, { Component } from "react";
import { InfoConsumer } from "../context";
import { Link } from "react-router-dom";

class Info extends Component {
  state = {};
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      img,
      description,
    } = this.props.item;
    return (
      <InfoConsumer>
        {(value) => {
          return (
            <div className=" col-10 col-lg-4 col-sm-6 mx-auto mb-5">
              <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={id} />
                <div className="card-body">
                  <h3 className="card-title">{headerTitle}</h3>
                  <h5 className="card-title">{headerSubTitle}</h5>
                  <p className="card-text">{description}</p>
                  <Link
                    onClick={() => value.handleItem(id)}
                    to="./details"
                    className="btn btn-outline-primary "
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Info;
