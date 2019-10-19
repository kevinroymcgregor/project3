import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard";
import ItemsAPI from "../../utils/axios";
// import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    items: [],
    searchText: ''
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    ItemsAPI.getItems()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  handleSearch = (queryText) => {
    this.setState({ searchText: queryText });
  }

  render() {
    return (
      <>
        <Navbar callbackFromParent={this.handleSearch} />
        <div id="itemCardContainer">
          {this.state.items.map(item => (
            <ItemCard key={item._id}
              itemID={item._id}
              itemImage={item.imgs[0]}
              itemName={item.name}
              itemPrice={item.price}
              itemLocation={`${item.sellerID[0].city}, ${item.sellerID[0].state}`}
              itemCategory={item.category}
              itemDescription={item.description}
              itemImages={item.imgs[0]}
            />

          )).filter(i => {
            let searchHaystack = i.props.itemName.toLowerCase();
            let searchHaystack2 = i.props.itemDescription.toLowerCase();
            let searchHaystack3 = i.props.itemCategory.toLowerCase();
            let searchNeedle = this.state.searchText.toLowerCase();
            return searchNeedle === '' ? true : (searchHaystack.indexOf(searchNeedle) > -1) || (searchHaystack2.indexOf(searchNeedle) > -1) || (searchHaystack3.indexOf(searchNeedle) > -1);
          })}
        </div>
        <a className="btn-floating btn-large waves-effect waves-light orange darken-3 z-depth-3" id="scrollToTopButton" onClick={() => scroll.scrollToTop({ smooth: true })}><i className="material-icons">arrow_upward</i></a>

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