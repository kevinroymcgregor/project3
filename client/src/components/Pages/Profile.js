import React, { Component } from 'react';
// import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
// import ItemsAPI from "../../utils/axios";
// import PropTypes from "prop-types";
import ProfileDetailsCard from '../ProfileDetailsCard/ProfileDetailsCard';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import '../ProfileTab/ProfileTab.css';
import Avatar from "../uploads/Avatar";
import ItemCard from "../ItemCard/ItemCard";
import ItemsAPI from "../../utils/axios";


class Profile extends Component {
  state = {
    user: [],
    items: []
  }

  componentDidMount() {
    M.AutoInit();
    this.loadUser();
    // this.loadItems();
  }

  loadUser = () => {
    const id = this.props.auth.user.id
    console.log(id)
    // ItemsAPI.getUserById()
    axios.get('/api/users/getUserById/' + id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
      this.loadItems()
  }

  loadItems = () => {
    const sellerID = this.props.auth.user.id
    console.log('id:',sellerID)
    axios.get('/api/items/getItems')
    // ItemsAPI.getItemsBySellerID()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  

  render() {
    const currentUser = this.state.user.items
    console.log('current user:', currentUser);
    const { user } = this.props.auth
    // console.log(user.id)
    console.log('items:', this.state.items)

    
    const userItems = this.state.items.filter((item) => {
      return item.sellerID === this.props.auth.user.id
    })

    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4"><a className="active" href="#test1">Profile</a></li>
                <li className="tab col s4"><a href="#test2">Selling</a></li>
                <li className="tab col s4"><a href="#test3">Watching</a></li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <div className="row">
                <ProfileDetailsCard
                  first={this.state.user.firstName}
                  last={this.state.user.lastName}
                  email={this.state.user.email}
                  city={this.state.user.city}
                  state={this.state.user.state}
                  zip={this.state.user.zipCode}
                  phone={this.state.user.phone}
                  avatar={this.state.user.avatar}
                />
              </div>
              <div className="row">
                <Avatar
                  usersId={this.state.user._id}
                />
              </div>
            </div>
            <div id="test2" className="col s12">
              {/* <p>{this.state.user._id}</p> */}

              <div id="itemCardContainer">
                {this.state.items.map(item => (
                  <ItemCard itemID={item._id}
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
              </div>
            <div id="test3" className="col s12">Not watching any items</div>

          </div>
          {/* <div className="back-to-dashboard">
                    <Link to="/dashboard">
                    <Button label="Back To Home" icon="home" />
                    </Link>
                    </div> */}
        </div>
        <Footer />
      </>
    )
  }
}

// export default Profile;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Profile);