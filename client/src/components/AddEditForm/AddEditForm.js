import React, { Component } from 'react';
import axios from 'axios';
import Items from '../uploads/Items';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import '../AddEditForm/AddEditForm.css';
// import ItemsAPI from "../../utils/axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import $ from 'jquery';

class AddEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            category: '',
            description: '',
            selectedFiles: []
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
        // event.preventDefault();
        const itemData = {

            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description,
            sellerID: this.props.auth.user.id,
            imgs: this.state.selectedFiles

        }
        console.log(itemData)

        // ItemsAPI.addItem()
        axios.post('/api/items/addItem', itemData)
            .then(res => console.log(res.data));

        window.location = '/dashboard'
    }

    multipleFileChangedHandler = (event) => {
        this.setState({
            selectedFiles: event.target.files
        });
        console.log(event.target.files);
    };

    multipleFileUploadHandler = () => {
        const data = new FormData();
        let selectedFiles = this.state.selectedFiles;
        // If file selected

        if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                data.append('galleryImage', selectedFiles[i], selectedFiles[i].name);
            }
            axios.post('/api/profile/multiple-file-upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
                .then((response) => {
                    console.log('res', response);
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                this.ocShowAlert('Max size: 5MB', 'red');
                            } else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
                                this.ocShowAlert('A maxium of 4 images allowed', 'red');
                            } else {
                                // If not the given ile type
                                this.ocShowAlert(response.data.error, 'red');
                            }
                        } else {
                            // Success
                            let fileName = [];
                            for (let i = 0; i < response.data.locationArray.length; i++) {
                                fileName.push(response.data.locationArray[i])
                                console.log('fileName', fileName);
                                // this.ocShowAlert('File Successfully Uploaded', '#3089cf');
                                this.setState({
                                    selectedFiles: fileName
                                });
                            }
                            this.handleSubmit();
                        }
                    }
                }).catch((error) => {
                    // If another error
                    this.ocShowAlert(error, 'red');
                });
        } else {
            // if file not selected throw error
            this.ocShowAlert('Please upload at least 1 image file', 'red');
        }
    };

    // ShowAlert Function
    ocShowAlert = (message, background = '#3089cf') => {
        let alertContainer = document.querySelector('#oc-alert-container'),
            alertEl = document.createElement('div'),
            textNode = document.createTextNode(message);
        alertEl.setAttribute('class', 'oc-alert-pop-up');
        $(alertEl).css('background', background);
        alertEl.appendChild(textNode);
        alertContainer.appendChild(alertEl);
        setTimeout(function () {
            $(alertEl).fadeOut('slow');
            $(alertEl).remove();
        }, 3000);
    };

    render() {

        // console.log( this.state );

        const { isAuthenticated, user } = this.props.auth;


        // <----- Testing ----->
        // const { name } = this.state
        // const { price } = this.state
        // const { category } = this.state
        // const { description } = this.state

        return (
            <div className="container center-align edit-form-bg">
                <div className="addEditBackButton">
                <Link to="/dashboard" className="left btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> back
                </Link>
                </div>
                <div className="post-header">
                    <h4>Post an Item</h4>
                </div>
                <form>
                    <div className="row">
                        <div className="input-field col l6 offset-l3 m6 offset-m3 s12">
                            <input
                                id="item_name"
                                type="text"
                                className="validate"
                                maxLength="25"
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
                </form>

                <div id="oc-alert-container"></div>
                <div className="card-header">
                    <h5 style={{ color: "#555", marginLeft: "12px", fontWeight: "bold" }}>Select item images for upload</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Please upload the Images for your gallery (max size: 5MB | max files: 4)</p>
                    <br></br>
                    <div className="file-field input-field fileUploadDiv">
                        <div className="btn" style={{ backgroundColor: "#fb8122" }}>
                            <span>Choose Files</span>
                            <input type="file" multiple onChange={this.multipleFileChangedHandler} />
                        </div>
                        <div className="file-path-wrapper" style={{width: "100%"}}>
                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <br></br>
                        <button className="btn btn-info addEditSubmitBtn" style={{ width: "250px", height: "50px", backgroundColor: "#fb8122", fontSize: "24px" }} onClick={this.multipleFileUploadHandler}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AddEditForm);