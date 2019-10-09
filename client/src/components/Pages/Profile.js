import React, { Component } from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
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
                <div className="container" maxWidth="md">
                    <ProfileTab />
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            Back to Item...
            </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;