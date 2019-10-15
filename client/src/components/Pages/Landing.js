import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageLabel from "../PageLabel/PageLabel";

class Landing extends Component {
  render() {
    return (
      <>
        <PageLabel />
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <br />
              {/* <div className="col s6" id="registerButtonDiv"> */}
              <div id="registerButtonDiv">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable orange darken-1"
                  id="registerButton"
                >
                  Register
              </Link>
              </div>
              {/* <div className="col s6" id="logInButtonDiv"> */}
              <div id="logInButtonDiv">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable grey lighten-5 loginBtn"
                  id="logInButton"
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