import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageLabel from "../PageLabel/PageLabel";

class Landing extends Component {
  render() {
    return (
      <>
        <PageLabel />
          <div className="row">
            <div className="col m6 s12 center-align">
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
            <div className="col m6 s12 center-align">
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
      </>
    );
  }
}
export default Landing;