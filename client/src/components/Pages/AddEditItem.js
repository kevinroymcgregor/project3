import React, { Component } from 'react';
import AddEditForm from '../AddEditForm/AddEditForm';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class AddEditItem extends Component {



    render() {
        return (
            <>
                <Navbar />
                <AddEditForm />
                <Footer />
            </>
        )
    }
}

export default AddEditItem;