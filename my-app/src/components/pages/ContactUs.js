import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3 className="mb-5 text-bold" style={{color:"var(--mainDark)", fontWeight:"800"}}>Our Location</h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                title="this is map title"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1724.8204095846243!2d31.234963134364904!3d30.16168349278949!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1615997257028!5m2!1sen!2seg"
                style={{
                  border: "0",
                  width: "100%",
                  height: "400px",
                  frameborder: "0",
                }}
                allowFullscreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4 className="mb-3">
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <label for="Name">Name</label>
                  <input id="Name" type="text" className="form-control" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <Link className="text-uppercase btn btn-outline-primary">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  &nbsp; Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
