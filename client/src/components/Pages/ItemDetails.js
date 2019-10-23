import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import ItemAPI from '../../utils/axios';
let moment = require('moment');


class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                sellerID: [{ city: '', state: '' }],
                imgs: [{ '': '' }]
            }
        };
    }

    componentDidMount() {
        this.loadItem(this.props.match.params.ID);

    }

    loadItem = (ID) => {
        ItemAPI.getItemByID(ID)
            .then(res => this.setState({ item: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="back-to-dashboard">
                        <Link to="/dashboard" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> back
                        </Link>
                    </div>

                    <img className="selectedImage row" src="https://lorempixel.com/800/400/food/5" />
                    <div className="thumbnails row">
                        <img className="col l3" src={this.state.item.imgs[0] ? this.state.item.imgs[0] : "https://lorempixel.com/800/400/food/1"} />
                        <img className="col l3" src={this.state.item.imgs[1] ? this.state.item.imgs[1] : "https://lorempixel.com/800/400/food/2"} />
                        <img className="col l3" src={this.state.item.imgs[2] ? this.state.item.imgs[2] : "https://lorempixel.com/800/400/food/3"} />
                        <img className="col l3" src={this.state.item.imgs[3] ? this.state.item.imgs[3] : 'https://lorempixel.com/800/400/food/4'} />
                    </div>

                    <ItemDetailsCard
                        itemName={this.state.item.name}
                        itemDescription={this.state.item.description}
                        itemCategory={this.state.item.category}
                        itemPrice={`$${this.state.item.price}`}
                        itemLocation={`${this.state.item.sellerID[0].city}, ${this.state.item.sellerID[0].state}`}
                        itemDate={moment(this.state.item.createdDate).format("MMM Do YYYY")}
                    />
                </div>
                <Footer />
            </>
        )
    }
}

export default ItemDetails;