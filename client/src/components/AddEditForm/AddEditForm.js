import React, { Component } from 'react';
import axios from 'axios';
import Items from '../uploads/Items';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import '../AddEditForm/AddEditForm.css';
// import ItemsAPI from "../../utils/axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            category: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
      }

    handleChange = (event) => {
        event.preventDefault();
        
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const itemData = {

            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description,
            sellerID: this.props.auth.user.id

        }
        console.log(itemData)

        // ItemsAPI.addItem()
        axios.post('/api/items/addItem', itemData)
            .then(res => console.log(res.data));

        // window.location = '/addedititem'
    }

    componentDidMount(){
        console.log(this.props);
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;
        

        // <----- Testing ----->
        // const { name } = this.state
        // const { price } = this.state
        // const { category } = this.state
        // const { description } = this.state

        return (
            <div className="container center-align edit-form-bg">
                <Link to="/dashboard">
                    <Button label="Back To Home" icon="home" />
                </Link>
     
                {/* This section was for testing puposes */}
                {/* <p>Item name: {name}</p>
                <p>Item price: {price}</p>
                <p>Item category: {category}</p>
                <p>Item description: {description}</p> */}

                <div className="post-header">
                    <h4>Post an Item</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col l6 offset-l3 m6 offset-m3 s12">
                            <input
                                id="item_name"
                                type="text"
                                className="validate"
                                name="name" onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <label htmlFor="name">Item Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m3 offset-m3 l3 offset-l3">
                            <i className="small material-icons prefix">attach_money</i>
                            <input
                                id="item_price"
                                type="number"
                                className="validate"
                                name="price"
                                onChange={this.handleChange}
                                value={this.state.price}
                            />
                            <label htmlFor="price">Enter Price</label>
                        </div>
                        <div className="input-field col s12 m3 l3" name="category">
                            <select
                                name="category"
                                onChange={this.handleChange}
                                value={this.state.category}
                            >
                                <option value="" disabled selected>Choose a Category</option>
                                <option value="Video Games">Video Games</option>
                                <option value="Game Consoles">Game Consoles</option>
                                <option value="Game Accessories">Game Accessories</option>
                                <option value="Board Games">Board Games</option>
                                <option value="Arcade">Arcade</option>
                            </select>
                            <label>Category</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col l6 offset-l3  m6 offset-m3 s12">
                            <textarea
                                id="item_description"
                                className="materialize-textarea validate"
                                name="description"
                                onChange={this.handleChange}
                                value={this.state.description}
                            />
                            <label htmlFor="desc">Item description</label>
                        </div>
                    </div>

                    <div className="row">
                        <Items />
                    </div>
                    <input type="submit" value="Submit" />
                    {/* <Button label="Submit" icon="check" type="submit" />*/}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AddEditForm);