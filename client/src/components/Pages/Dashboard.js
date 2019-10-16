import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard";
import ItemsAPI from "../../utils/axios";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    items: []
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    ItemsAPI.getItems()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props.auth;
    console.log(user)
    console.log(this.state.items);


    return (
      <>
        <Navbar />
        <div id="itemCardContainer">
          {this.state.items.map(item => (
            <ItemCard key={item._id}
              itemImage={item.imgs[0]}
              itemName={item.name}
              itemPrice={item.price}
              itemLocation={`${item.sellerID[0].city}, ${item.sellerID[0].state}`}
              itemCategory={item.category}
              itemDescription={item.description}
            />
          ))}
          {/* <ItemCard
            itemName="Retro Item"
            itemPrice="100"
            itemLocation="Phoenix, AZ"
            itemDescription="This is a bunch of placeholder text that can be removed. It was only added to make the demo ItemCard component display properly. I am writing extra text in here so that it will properly test the overflow css." /> */}
        </div>

        {/* <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack{" "}
                  <span style={{ fontFamily: "monospace" }}>Main User Page</span>
                </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable orange darken-1"
              >
                Logout

            </button>
            </div>
          </div>
        </div> */}

        <a className="btn-floating btn-large waves-effect waves-light orange darken-3 z-depth-3" id="scrollToTopButton"><i className="material-icons">arrow_upward</i></a>

        <Footer />
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);