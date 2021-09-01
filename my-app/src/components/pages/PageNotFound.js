import React, { Component } from "react";
import {Link} from 'react-router-dom'
class NotFoundPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>ops!</h1>
              <h2>Error 404 Not Found</h2>
              <div className="error-details">
                Sorry,, an Error Has Been Occurred Page is not found
              </div>
            <div className="error-action">
                <Link to='./' className="btn btn-outline-primary btn-lg my-5 mr-3">
                    <i className="fas fa-home"></i>
                  &nbsp;  Back to Home Page
                </Link>
                <Link  to='./contactus'className="btn btn-outline-secondary btn-lg">
                    <i className="fas fa-envelope"></i>
                    &nbsp; Support
                </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
