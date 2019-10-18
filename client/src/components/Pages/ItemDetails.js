import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import ItemAPI from '../../utils/axios';
import Moment from 'moment';


class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: { 
                sellerID: [{ city: '', state: '' }]
            }
        };

        // const loadItem = (ID) => {
        //     ItemAPI.getItemByID(ID)
        //         .then(res => this.state = { item: res.data })
        //         .catch(err => console.log(err));
        // };

        // loadItem(this.props.match.params.ID);
    }

    // state = {
    //     item: {}
    //   }

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

                {/* {console.log(this.props.match.params.ID)} */}
                {console.log(this.state)}
                {/* {console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(this.state.item.createdDate))}; */}
                {/* {console.log(formatDate(this.state.item.createdDate))}; */}
                <Navbar />
                <div className="container">
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            <Button label="Back To Home" icon="home" />
                        </Link>
                    </div>
                    <Carousel itemImages={this.state.item.imgs} />
                    <ItemDetailsCard
                        itemName={this.state.item.name}
                        itemDescription={this.state.item.description}
                        itemPrice={`$${this.state.item.price}`}
                        itemLocation={`${this.state.item.sellerID[0].city}, ${this.state.item.sellerID[0].state}`}
                        // itemDate={(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(this.state.item.createdDate))}
                        itemDate={this.state.item.createdDate}
                    />
                </div>
                <Footer />
            </>
        )
    }
}

export default ItemDetails;