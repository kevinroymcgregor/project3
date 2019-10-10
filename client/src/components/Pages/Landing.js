import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageLabel from "../PageLabel/PageLabel";

class Landing extends Component {
  render() {
    return (
      <>
        <PageLabel />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                Authentication Page -- Login / Register
            </h4>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue darken-4"
                >
                  Register
              </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable green darken-4"
                >
                  Log In
              </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Landing;