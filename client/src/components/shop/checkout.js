import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import cart from "../shop/shopping-cart";


class Checkout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.logoutUser) {
      this.props.history.push("/dashboard");
    }
  }

/*   componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  } */

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    //const { errors } = this.state;

    return (
      <div className="containerWrapper">
        <div className="container" id="registerForm">
          <div className="row registerRow">
            <div style={{ marginBottom: "30px" }} className="col s8 offset-s2">
              <Link to="/shopping-cart" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> back
            </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  Checkout
              </h4>
              <h3>Your Total: $$$$ </h3>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.name}
                    //error={errors.name}
                    id="name"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.name
                    })} */
                  />
                  <label htmlFor="name">Name</label>
                {/*   <span className="red-text">{errors.name}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.address}
                    //error={errors.address}
                    id="address"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.address
                    })} */
                  />
                  <label htmlFor="address">Full Shipping Address</label>
                  {/* <span className="red-text">{errors.address}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.cardholder}
                    //error={errors.cardholder}
                    id="cardholder"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.cardholder
                    })} */
                  />
                  <label htmlFor="cardholder">Card Holder Name</label>
                  {/* <span className="red-text">{errors.cardholder}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.creditCard}
                    //error={errors.creditCard}
                    id="creditCard"
                    type="password"
                    /* className={classnames("", {
                      invalid: errors.creditCard
                    })} */
                  />
                  <label htmlFor="password">Credit Card Number</label>
                  {/* <span className="red-text">{errors.creditCard}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.expiryMonth}
                    //error={errors.expiryMonth}
                    id="expiryMonth"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.expiryMonth
                    })} */
                  />
                  <label htmlFor="password2">Expiry Month (MM)</label>
                  {/* <span className="red-text">{errors.expiryMonth}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.expiryYear}
                    //error={errors.expiryYear}
                    id="expiryYear"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.expiryYear
                    })} */
                  />
                  <label htmlFor="name">Expiry Year (YY)</label>
                  {/* <span className="red-text">{errors.expiryYear}</span> */}
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    //value={this.state.cvc}
                    //error={errors.cvc}
                    id="cvc"
                    type="text"
                    /* className={classnames("", {
                      invalid: errors.cvc
                    })} */
                  />
                  <label htmlFor="name">CVC</label>
                  {/* <span className="red-text">{errors.cvc}</span> */}
                </div>
                <div className="col s12 center-align" style={{ paddingLeft: "11.250px" }}>
                  <Link
                    to="/dashboard"
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable orange darken-3"
                  >
                    Submit Order
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



//mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

//connects our React components to our Redux store provided by the Provider component
export default connect(
  mapStateToProps,
  { logoutUser }
)(Checkout);

