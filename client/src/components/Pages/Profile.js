import React, { Component } from 'react';
// import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import ProfileDetailsCard from '../ProfileDetailsCard/ProfileDetailsCard';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import '../ProfileTab/ProfileTab.css';
import Avatar from "../uploads/Avatar";
import SellerItemCard from "../SellerItemCard/SellerItemCard";
import { Link } from "react-router-dom";


class Profile extends Component {

    state = {
      user: [],
      items: []
    }

    componentDidMount() {
      M.AutoInit();
      this.loadUser();
      this.loadItems();
    }

    loadUser = () => {
      const id = this.props.auth.user.id
      // console.log(id)
      axios.get('/api/users/getUserById/' + id)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }

    loadItems = () => {
      const sellerID = this.props.auth.user.id
      // console.log('id:', sellerID)
      axios.get('/api/items/getUserItems')
        .then(res => this.setState({ items: res.data.filter(item => (item.sellerID[0] === sellerID)) }))
        // .then(res => this.setState({ items: res.data }))
        .catch(err => console.log(err));
      // this.getUserItems()
    }

  render() {
    // const currentUser = this.state.user.items
    // const { user } = this.props.auth
    // const theseItems = this.state.items
    const { avatar } = this.state.user;
    // const useritemsArray = this.state.currentUserItems
    // let userItems = ({currentUserItems: theseItems.filter(item => ( item.sellerID[0] === user.id))})
    const avatarLink = (
      <>{avatar ? `{avatar : ''}` : ''}</>
    )

    return (
      <>
        <Navbar />
        <div className="container profileContainer">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4"><a className="active" href="#test1">Profile</a></li>
                <li className="tab col s4"><a href="#test2">Selling</a></li>
                <li className="tab col s4"><a href="#test3">Watching</a></li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <Link to="/dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> back
              </Link>
              <div className="row">
                <ProfileDetailsCard
                  first={this.state.user.firstName}
                  last={this.state.user.lastName}
                  email={this.state.user.email}
                  city={this.state.user.city}
                  state={this.state.user.state}
                  zip={this.state.user.zipCode}
                  phone={this.state.user.phone}
                  avatar={avatar ? avatar : 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'}
                />
              </div>
              <div className="row">
                <Avatar
                  usersId={this.state.user._id}
                />
              </div>
            </div>
            <div id="test2" className="col s12">
              <Link to="/dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> back
              </Link>
              {this.state.items.map(item => (
                <SellerItemCard
                  key={item._id}
                  itemID={item._id}
                  itemImage={item.imgs[0]}
                  itemName={item.name}
                  itemPrice={item.price}
                  itemLocation={`${item.sellerID[0].city}, ${item.sellerID[0].state}`}
                  itemCategory={item.category}
                  itemDescription={item.description}
                  itemImages={item.imgs[0]}
                />
              ))}
            </div>
            <div id="test3" className="col s12">
              <Link to="/dashboard" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> back
              </Link>
              <div className="watchCard">
                UNDER CONSTRUCTION
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Profile);