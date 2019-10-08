import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
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

    // functional components will go here

    // render to page
    render() {
        return (
            <>
                <Navbar />
                <Container maxWidth="md">
                    <ProfileTab />
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            Back to Item...
            </Link>
                    </div>
                </Container>
            </>
        )
    }
}

export default Profile;