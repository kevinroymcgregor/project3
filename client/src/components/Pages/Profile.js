import React, { Component } from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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
                            Back to Dashboard...
            </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Profile;