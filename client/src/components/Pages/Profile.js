import React, { Component } from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import { Link } from "react-router-dom";


class Profile extends Component {
    //set the components initial state
    state = {
        user: "",
        avatar: "",
        id: "",
        location: "",
        email: "",
        phone: "",
        selling: []
    }


    // render to page
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <ProfileTab />
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

export default Profile;