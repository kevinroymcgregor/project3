import React, { Component } from 'react';
import ProfileDetailsCard from '../ProfileDetailsCard/ProfileDetailsCard';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import '../ProfileTab/ProfileTab.css';

class ProfileTab extends Component {

  componentDidMount() {
    M.AutoInit();
  }


  render() {

      return(
        <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s4"><a className="active" href="#test1">Profile</a></li>
            <li className="tab col s4"><a href="#test2">Selling</a></li>
            <li className="tab col s4"><a href="#test3">Watching</a></li>
          </ul>
        </div>
        <div id="test1" className="col s12">
        <ProfileDetailsCard 
          first={this.props.firstName}
          last='Doe'
          email='test@email.com'
          city='Phoenix'
          state='Arizona'
          zip='85001'
          phone='123-123-1234'
        />
        </div>
        <div id="test2" className="col s12"></div>
        <div id="test3" className="col s12">Not watching any items</div>
        
      </div>
      )
  }
}

export default ProfileTab;