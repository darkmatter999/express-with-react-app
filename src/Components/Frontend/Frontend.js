import React from 'react';
import './Frontend.css';

class Frontend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.displayUsers = this.displayUsers.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        if (this.state.display === false) {
            this.setState({display: true})
        } else if (this.state.display === true) {
            this.setState({display: false})
        }
    }
    

    displayUsers() {
        if (this.state.display) {
            this.props.displayUsers()
            return ( 
                <div>
                    <br />
                    {this.props.users.map(user =>
                    <div key={user.id}>{user.username}</div>)}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleButton}>Display users</button>
                {this.displayUsers()}
            </div>
        )
    }
 }

 export default Frontend;