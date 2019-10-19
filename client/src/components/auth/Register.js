import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      avatar: "",
      email: "",
      password: "",
      password2: "",
      phone: "",
      city: "",
      state: "",
      zipCode: "",
      rating: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      avatar: "",
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phone: this.state.phone,
      rating: "",
      errors: {}
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="containerWrapper">
        <div className="container" id="registerForm">
          <div className="row registerRow">
            <div style={{ marginBottom: "30px" }} className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> back
            </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  Register
              </h4>
                <p className="black-text text-darken-1 alreadyHaveAccountText">
                  Already have an account? <Link to="/login" className="goToOtherPageFormLink"> Click here to Login</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.firstName}
                    error={errors.firstName}
                    id="firstName"
                    type="text"
                    className={classnames("", {
                      invalid: errors.firstName
                    })}
                  />
                  <label htmlFor="name">First Name</label>
                  <span className="red-text">{errors.firstName}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.lastName}
                    error={errors.lastName}
                    id="lastName"
                    type="text"
                    className={classnames("", {
                      invalid: errors.lastName
                    })}
                  />
                  <label htmlFor="name">Last Name</label>
                  <span className="red-text">{errors.lastName}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="red-text">{errors.email}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                  />
                  <label htmlFor="password">Password</label>
                  <span className="red-text">{errors.password}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                  />
                  <label htmlFor="password2">Confirm Password</label>
                  <span className="red-text">{errors.password2}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.city}
                    error={errors.city}
                    id="city"
                    type="text"
                    className={classnames("", {
                      invalid: errors.city
                    })}
                  />
                  <label htmlFor="name">City</label>
                  <span className="red-text">{errors.city}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.state}
                    error={errors.state}
                    id="state"
                    type="text"
                    className={classnames("", {
                      invalid: errors.state
                    })}
                  />
                  <label htmlFor="name">State</label>
                  <span className="red-text">{errors.state}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.zipCode}
                    error={errors.zipCode}
                    id="zipCode"
                    type="text"
                    className={classnames("", {
                      invalid: errors.zipCode
                    })}
                  />
                  <label htmlFor="name">Zip Code</label>
                  <span className="red-text">{errors.zipCode}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.phone}
                    error={errors.phone}
                    id="phone"
                    type="text"
                    className={classnames("", {
                      invalid: errors.phone
                    })}
                  />
                  <label htmlFor="name">Phone</label>
                  <span className="red-text">{errors.phone}</span>
                </div>
                <div className="col s12 center-align" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable orange darken-3"
                  >
                    Register
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

//connects our React components to our Redux store provided by the Provider component
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

