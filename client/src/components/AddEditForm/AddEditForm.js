import React, { Component } from 'react';

class AddEditForm extends Component {

    render() {

        return (
            <div className="container">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="Item name" id="item_name" type="text" class="validate" />
                                <label for="item_name">What are you selling?</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="item_price" type="number" class="validate" placeholder="Enter Price" />
                                <label for="item_price">Price</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <textarea id="item_description" class="materialize-textarea" placeholder="Item description..."></textarea>
                                <label for="textarea1">Description</label>
                            </div>



                            <div class="input-field col s6">
                                <textarea id="item_category" class="materialize-textarea" placeholder="Category"></textarea>
                                <label for="textarea1">Category</label>
                            </div>
                        </div>

                        <div class="row">
                            <form action="#">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" multiple />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEditForm;