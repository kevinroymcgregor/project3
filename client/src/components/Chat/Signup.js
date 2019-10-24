import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ username: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username);
    }
    render() {
        return (
            <div className="form-container">
                
                <span className="chatHeaderContainer">
                <h5 className="chatHeader center-align">Retro-Connect
                <i className="material-icons chatIcon right">get_app</i></h5>
                </span>
                
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="email" style={{ color: "black"}}>What is your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="input" style={{ borderBottom: "black 1px solid"}} />
                    <button className="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Signup;