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
                imgs: []
            },
            selectedImageID: 0
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

    changeImage = (imageID) => {
        if (this.state.item.imgs[imageID] !== undefined) {
            this.setState({ selectedImageID: imageID });
        }
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

                    <div className="selectedImageWrapper">
                    <img className="row" id="selectedImage" src={this.state.item.imgs[this.state.selectedImageID]} />
                    </div>

                    <div className="row" style={{ margin: 0 }}>
                        <div className="thumbnails">
                            <img onClick={(e) => this.changeImage(0, e)} src={this.state.item.imgs[0] ? this.state.item.imgs[0] : "https://dummyimage.com/600x400/222/fff.png&text=No+Image"} />
                            <img onClick={(e) => this.changeImage(1, e)} src={this.state.item.imgs[1] ? this.state.item.imgs[1] : "https://dummyimage.com/600x400/222/fff.png&text=No+Image"} />
                            <img onClick={(e) => this.changeImage(2, e)} src={this.state.item.imgs[2] ? this.state.item.imgs[2] : "https://dummyimage.com/600x400/222/fff.png&text=No+Image"} />
                            <img onClick={(e) => this.changeImage(3, e)} src={this.state.item.imgs[3] ? this.state.item.imgs[3] : "https://dummyimage.com/600x400/222/fff.png&text=No+Image"} />
                        </div>
                    </div>

                    <ItemDetailsCard
                        itemID={this.state.item._id}
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