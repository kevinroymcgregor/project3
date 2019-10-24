import React, { Component } from 'react';

class  ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }
    changeView() {
        this.props.changeView('Signup')
    }
    render() {
        return (
            <div>
                <button className="chat-button" onClick={this.changeView}><i className="material-icons">chat_bubble_outline</i></button>
            </div>
        )
    }
}
export default ChatMessage;