import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import ItemDetailsCard from '../ItemDetailsCard/ItemDetailsCard';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import ItemAPI from '../../utils/axios'


class ItemDetails extends Component {

    state = {
        item: {}
      }

      componentDidMount(){
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
               
                {console.log(this.props.match.params.ID)}
                {console.log(this.state.item)}
                <Navbar />
                <div className="container">
                    <div className="back-to-dashboard">
                        <Link to="/dashboard">
                            <Button label="Back To Home" icon="home" />
                        </Link>
                    </div>
                    <Carousel itemImages="https://cdn.gamer-network.net/2015/usgamer/Assassins-Creed-All-Header-03.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/75/ubisoft-shouldnt-forget-traditional-assassins-creed-fans.jpg" />
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