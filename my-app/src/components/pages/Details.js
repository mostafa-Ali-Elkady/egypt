import React, { Component, Fragment } from "react";
import { InfoConsumer } from "../context";
import styled from "styled-components";
import Reviews from "./Reviews";

class Details extends Component {
  state = {};
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            title,
            description,
            img,
            maps,
          } = data.detailInfo;
          return (
            <Fragment>
              <HeaderDetails className="container-fluid align-items-center" id={id}>
                <h1 className="display-1 font-weight-bold">{headerTitle} </h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>

                {/* nav Icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f fas-lg"></i>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-youtube"></i>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-facebook-messenger"></i>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-google-plus"></i>
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              <div className="container">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#aboutplace"
                      role="tab"
                      data-toggle="tab"
                    >
                      About Place
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#reviews"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="#map"
                      role="tab"
                      data-toggle="tab"
                    >
                      Maps
                    </a>
                  </li>
                </ul>

                <div className="tab-content mb-5">
                  <div
                    className="tab-pane in active text-center mt-5"
                    id="aboutplace"
                    role="tabpanel"
                  >
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                  <div className="tab-pane " id="reviews" role="tabpanel">
                    <Reviews />
                  </div>
                  <div className="tab-pane mt-5" id="map" role="tabpanel">
                    <iframe
                      src={maps}
                      title="s"
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameborder: "0",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), #fff);
  height: 100vh;
  color: var(--mainWhite);
  text-align: center;
  margin-bottom: 10%;
  transition: all 0.3 fade-in-out;
  -webkit-transition: all 0.5 fade-in-out;

  h1 {
    color: var(--mainDark);
    padding-top: 10%;
    text-transform: uppercase;
  }
  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainGrey);
  }
  i {
    font-size: 1.9rem;
    opacity: 0.7;
  }
  i:hover {
    cursor: pointer;
    opacity: 1;
  }
  .fa-facebook-f {
    color: #3b5998;
  }
  .fa-youtube {
    color: #bb0000;
  }
  .fa-twitter {
    color: #00aced;
  }

  .fa-google-plus {
    color: #dd4b39;
  }
  .fa-whatsapp {
    color: #00e676;
  }
  .fa-facebook-messenger {
    color: #5913d3;
  }

  .nav-item {
    height: 18.75rem;
  }
  @media (max-width: 760px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
