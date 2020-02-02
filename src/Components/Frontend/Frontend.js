import React from 'react';
import './Frontend.css';

class Frontend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayUsers: false,
            displayAnimals: false,
            input: ''
        }

        this.displayUsers = this.displayUsers.bind(this);
        this.toggleUsersButton = this.toggleUsersButton.bind(this);
        this.displayAnimals = this.displayAnimals.bind(this);
        this.toggleAnimalsButton = this.toggleAnimalsButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.click = this.click.bind(this)
    }


    toggleUsersButton() {
        if (this.state.displayUsers === false) {
            this.setState({displayUsers: true})
        } else if (this.state.displayUsers === true) {
            this.setState({displayUsers: false})
        }
    }

    toggleAnimalsButton() {
        if (this.state.displayAnimals === false) {
            this.setState({displayAnimals: true})
        } else if (this.state.displayAnimals === true) {
            this.setState({displayAnimals: false})
        }
        
    }

    
    displayUsers() {
        if (this.state.displayUsers) {
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

    displayAnimals() {
        if (this.state.displayAnimals) {
            this.props.displayAnimals()
            
            return ( 
                <div>
                    <br />
                    {this.props.animals.map(animal =>
                    <div>{animal}</div>)}
                </div>
            )
        }
    }


    handleChange(event) {
        this.setState({input: event.target.value});
      }

    click() {
        //console.log(this.state.input)
        const inputValue = this.state.input
        //console.log(inputValue)
        return fetch('/animals', {method: 'POST', body: JSON.stringify({input: inputValue}), headers: {
            'Content-Type': 'application/json',
          }, })
        .then(response => response.json())
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleUsersButton}>Display users</button>
                {this.displayUsers()}
                <button onClick={this.toggleAnimalsButton}>Display animals</button>
                {this.displayAnimals()}
                <form>
                    <h1>Add new animal</h1>
                    <input className="input" value={this.state.input} onChange={(e) => {this.handleChange(e)}}></input>
                    <button onClick={this.click} type='primary'>Add animal</button>
                </form>
            </div>
        )
    }
 }

 export default Frontend;