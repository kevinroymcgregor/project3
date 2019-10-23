import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';


class Navbar extends Component {

  state = {
    user: []
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  componentDidMount() {
    M.AutoInit();
    this.loadUser();
  }

  loadUser = () => {
    const id = this.props.auth.user.id
    // console.log(id)
    // ItemsAPI.getUserById()
    axios.get('/api/users/getUserById/' + id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleSearch = (event) => {
    this.props.callbackFromParent(event.target.value);
  }

  render() {
    const {  user } = this.props.auth;
    // console.log(user)

    const {avatar} = this.state.user;
    // console.log(avatar)
    const avatarLink = (
      <>{ avatar ? `{avatar : ''}` : ''}</>
    )

    // const authLinks =(
    //   <p>{ user ? `Welcome ${user.email }` : ''}</p>
    // )
    // console.log(this.state.user)
    return (
      <>
      <div className="navbar-fixed">

        {/* Right side menu dropdown */}
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/profile" userId={user.id}>Account</Link></li>
          {/* <li><a href="#!">Messages</a></li> */}
          <li className="divider"></li>
          <li><a href="#!" onClick={this.onLogoutClick}>Logout</a></li>
        </ul>

        {/* Main nav */}
        <nav>
          <div className="nav-wrapper">
            <ul className="left">
                <Link to="/dashboard" className="brand-logo">
              <li>
                  <p>RETRO-TRADE</p>
              </li>
                </Link>
              <li>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </li>
            </ul>
            
              <div className="nav-wrapper search-form">
                <form action="/dashboard" method="GET" className="hide-on-med-and-down">
                  <div className="input-field main">
                    <input id="search" type="search" name="search" onKeyUp={this.handleSearch.bind(this)} required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>

            <ul className="right">
              <li>
                <Link to="/addedititem" className="rightIcons"><i className="large material-icons nav-icons">add_circle</i></Link>
              </li>
              <li><Link to="/cart" className="rightIcons"><i className="material-icons">shopping_cart</i></Link></li>
              <li className="hide-on-med-and-down"><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="large material-icons nav-icons">person</i></a></li>
            </ul>

          </div>
        </nav>
      </div>

      {/* Sidenav */}
      <ul id="slide-out" className="sidenav">
        <li><div className="user-view">
        <div className="background">
          {/* <img src="images/office.jpg" /> */}
        </div>
        <img className="circle" src={avatar ? avatar : 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'} />
        <span className="white-text name">{this.state.user.firstName} {this.state.user.lastName}</span>
        <span className="white-text email">{this.state.user.email}</span>
        </div>
        </li>     
        <li><Link to="/dashboard"><i className="material-icons">home</i>Home</Link></li>
        <li><Link to="/addedititem"><i className="material-icons">add_circle</i>Sell Item</Link></li>
        <li><Link to="/cart"><i className="material-icons">shopping_cart</i>My Cart</Link></li>
        <li><Link to="/profile"><i className="material-icons">settings</i>Account</Link></li>
        <li><a href="#!" onClick={this.onLogoutClick}><i className="material-icons">person</i>Logout</a></li>
        <li><div className="divider"></div></li>

        <form action="/dashboard" method="GET">
          <div className="input-field">
            <input id="search" type="search" name="search" onKeyUp={this.handleSearch.bind(this)} required placeholder="Search..." />
            <i className="material-icons">close</i>
          </div>
        </form>
        
        <li><a className="subheader">Categories</a></li>
        <li><a className="waves-effect" onClick={e => this.props.callbackFromParent(e.target.text)}>Video Games</a></li>
        <li><a className="waves-effect" onClick={e => this.props.callbackFromParent(e.target.text)}>Game Consoles</a></li>
        <li><a className="waves-effect" onClick={e => this.props.callbackFromParent(e.target.text)}>Game Accessories</a></li>
        <li><a className="waves-effect" onClick={e => this.props.callbackFromParent(e.target.text)}>Board Games</a></li>
        <li><a className="waves-effect" onClick={e => this.props.callbackFromParent(e.target.text)}>Arcade</a></li>

      </ul>
  {/* <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons white">menu</i></a> */}
        </>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
   )(Navbar);


