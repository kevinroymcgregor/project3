import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard";
import ItemsAPI from "../../utils/axios";
import { animateScroll as scroll } from 'react-scroll';
import ChatMessage from '../Chat/ChatMessage';
import Signup from '../Chat/Signup';
import ChatApp from '../Chat/ChatApp';
import { default as Chatkit } from '@pusher/chatkit-server';
    
    const chatkit = new Chatkit({
      instanceLocator: "v1:us1:d8747459-b650-47c8-a4e6-f6226fdfbe19",
      key: "8e867358-a73e-4811-9268-f6fda29db331:HTeREMP2e+HhaQLTjHC9V+Lp+LIFpBuFQ2SXhRJk+sA="
    })

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser(username) {
            chatkit.createUser({
                id: username,
                name: username,
            })
            .then((currentUser) => {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'ChatApp'
                })
            }).catch((err) => {
                     if(err.status === 400) {
                    this.setState({
                        currentUsername: username,
                        currentId: username,
                        currentView: 'ChatMessage'
                    })
                } else {
                    console.log(err.status);
                }
            });
        }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    items: [],
    searchText: '',
    currentView: 'ChatMessage',
    currentUsername: '',
    currentId: ''
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
    console.log(this.state.items);
    console.log(this.state.searchText);
    let view ='';
            if (this.state.currentView === "ChatMessage") {
                view = <ChatMessage  changeView={this.changeView}/>
            } else if (this.state.currentView === "Signup") {
                view = <Signup onSubmit={this.createUser}/>
            } else if (this.state.currentView === "ChatApp") {
                view = <ChatApp currentId={this.state.currentId} />
            }
    return (
        <>
        <Navbar callbackFromParent={this.handleSearch} />
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
          )).filter(i => {
            let searchHaystack = i.props.itemName.toLowerCase();
            let searchHaystack2 = i.props.itemDescription.toLowerCase();
            let searchHaystack3 = i.props.itemCategory.toLowerCase();
            let searchNeedle = this.state.searchText.toLowerCase();
            return searchNeedle === '' ? true : (searchHaystack.indexOf(searchNeedle) > -1) || (searchHaystack2.indexOf(searchNeedle) > -1) || (searchHaystack3.indexOf(searchNeedle) > -1);
          })}
        </div>
        <a className="btn-floating btn-large waves-effect waves-light orange darken-3 z-depth-3" id="scrollToTopButton" onClick={() => scroll.scrollToTop({ smooth: true })}><i className="material-icons">arrow_upward</i></a>
        <div className="Chat">{view}</div>
        
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