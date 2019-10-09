import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";


class ItemDetails extends Component {

    render() {
        return (
            <>
                <Navbar />
                <Container maxWidth="md">
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            Back to Item...
                        </Link>
                    </div>
                    <Carousel />
                    <ItemDetailsCard />
                </Container>
            </>
        )
    }
}

export default ItemDetails;