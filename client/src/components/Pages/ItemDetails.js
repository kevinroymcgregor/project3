import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Button from '../Button/Button';


class ItemDetails extends Component {

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="back-to-dashboard center-align">
                    <Link to="/dashboard">
                    <Button label="Back To Home" icon="home" />
                </Link>
                    </div>
                    <Carousel />
                    <ItemDetailsCard
                        itemName="Item Name"
                        itemDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        itemPrice="$59.99"
                        itemLocation="Phoenix, Arizona"
                        itemDate="October, 8, 2019"
                    />
                </div>
                <Footer />
            </>
        )
    }
}

export default ItemDetails;