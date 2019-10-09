import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";


class ItemDetails extends Component {

    render() {
        return (
            <>
                <Navbar />
                <div className="container" maxWidth="md">
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            Back to Item...
                        </Link>
                    </div>
                    <Carousel />
                    <ItemDetailsCard />
                </div>
            </>
        )
    }
}

export default ItemDetails;