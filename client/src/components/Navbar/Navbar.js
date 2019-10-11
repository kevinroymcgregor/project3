import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";


class Navbar extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
      <div className="navbar-fixed">

        {/* Right side menu dropdown */}
        <ul id="dropdown1" className="dropdown-content">
          <li> <Link to="/profile">Account</Link></li>
          <li><a href="#!">Messages</a></li>
          <li className="divider"></li>
          <li><a href="#!">Logout</a></li>
        </ul>

        {/* Main nav */}
        <nav className="">
          <div className="nav-wrapper">
            <ul className="left">
            <li>
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace"
                  }}
                  className="brand-logo">
                  RETRO-TRADE
              </Link></li>
              <li>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </li>
            </ul>
            
              <div className="nav-wrapper search-form">
                <form action="" method="post" className="hide-on-med-and-down">
                  <div className="input-field main">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>

            <ul className="right hide-on-med-and-down">    
              <li>
                <Link to="/addedititem"><i className="large material-icons nav-icons">photo_camera</i></Link>
              </li>
              <li><a href="#"><i className="large material-icons nav-icons">chat_bubble</i></a></li>
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="large material-icons nav-icons">person</i></a></li>
            </ul>

          </div>
        </nav>
      </div>

      {/* Sidenav */}
      <ul id="slide-out" className="sidenav">
        <li><Link to="/addedititem"><i className="material-icons">photo_camera</i>Sell Item</Link></li>
        <li><a href="#!"><i className="material-icons">chat_bubble</i>Messages</a></li>
        <li><Link to="/profile"><i className="material-icons">settings</i>Account</Link></li>
        <li><a href="#!"><i className="material-icons">person</i>Logout</a></li>
        <li><div className="divider"></div></li>

        <form action="" method="post">
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon right" htmlFor="text"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>

        <li><a className="subheader">Categories</a></li>
        <li><a className="waves-effect" href="#!">Video Games</a></li>
        <li><a className="waves-effect" href="#!">Game Consoles</a></li>
        <li><a className="waves-effect" href="#!">Game Accessories</a></li>
        <li><a className="waves-effect" href="#!">Board Games</a></li>
        <li><a className="waves-effect" href="#!">Arcade</a></li>
      </ul>
  {/* <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons white">menu</i></a> */}
        </>
    );
  }
}
export default Navbar;


