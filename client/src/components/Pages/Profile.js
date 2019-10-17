import React, { Component } from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
// import PropTypes from "prop-types";


class Profile extends Component {
    state = {
        user: []
        }      

    componentDidMount(){
        this.loadUser();
      }
    
    loadUser = () => {
        const id = this.props.auth.user.id
        console.log(id)
        axios.get('/api/users/getUserById/'+ id)
          .then(res => this.setState({ user: res.data }))
          .catch(err => console.log(err));
      }

    render() {
        console.log(this.state.user);
        const { user } = this.props.auth
        console.log(user.id)
        return (
            <>
                <Navbar />
                <div className="container">
                    <ProfileTab
                        firstName={user.city}
                    />
                    <div className="back-to-dashboard">
                    <Link to="/dashboard">
                    <Button label="Back To Home" icon="home" />
                    </Link>
                    </div>
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