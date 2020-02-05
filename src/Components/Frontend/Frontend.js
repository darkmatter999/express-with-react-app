import React from 'react';
import './Frontend.css';
import Backend from '../../util/Backend';

class Frontend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayUsers: false,
            displayAnimals: false,
            displayAddUser: false,
            displayDeleteUser: false,
            deleteInput: '',
            animalInput: '',
            userInput: ''
        }

        this.displayUsers = this.displayUsers.bind(this);
        this.toggleUsersButton = this.toggleUsersButton.bind(this);
        this.displayAnimals = this.displayAnimals.bind(this);
        this.toggleAnimalsButton = this.toggleAnimalsButton.bind(this);
        this.handleAnimalInputChange = this.handleAnimalInputChange.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.displayAddUser = this.displayAddUser.bind(this);
        this.toggleAddUserButton = this.toggleAddUserButton.bind(this);
        this.toggleDeleteUserButton = this.toggleDeleteUserButton.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleDeleteUserChange = this.handleDeleteUserChange.bind(this);
        this.displayDeleteUser = this.displayDeleteUser.bind(this)
    }

    toggleUsersButton() {
        if (this.state.displayUsers === false) {
            this.props.displayUsers()
            this.setState({displayUsers: true})
        } else if (this.state.displayUsers === true) {
            this.setState({displayUsers: false})
        }
    }

    toggleAddUserButton() {
        if (this.state.displayAddUser === false) {
            this.props.displayUsers()
            this.setState({displayAddUser: true})
        } else if (this.state.displayAddUser === true) {
            this.setState({displayAddUser: false})
        }
    }

    
    toggleDeleteUserButton() {
        if (this.state.displayDeleteUser === false) {
            this.props.displayUsers()
            this.setState({displayDeleteUser: true})
        } else if (this.state.displayDeleteUser === true) {
            this.setState({displayDeleteUser: false})
        }
    }


    toggleAnimalsButton() {
        if (this.state.displayAnimals === false) {
            this.props.displayAnimals()
            this.setState({displayAnimals: true})
        } else if (this.state.displayAnimals === true) {
            this.setState({displayAnimals: false})
        }
        
    }

    displayUsers() {
        if (this.state.displayUsers) {
            return ( 
                <div>
                    <br />
                    {this.props.users.map(user =>
                    <div key={user.id}>{user.username}</div>)}
                </div>
            )
        }
    }

    displayAddUser() {
        if (this.state.displayAddUser) {
            return (
                <div>
                <form>
                    <h1>Add new user</h1>
                    <input className="input" value={this.state.userInput} onChange={(e) => {this.handleUserInputChange(e)}}></input>
                    <button onClick={this.addUser} type='primary'>Add user</button>
                </form>
                </div>
            )
        }
    }

    displayDeleteUser() {
        if (this.state.displayDeleteUser) {
            return (
                <div>
                <form>
                    <h1>Delete user</h1>
                    <input className="input" value={this.state.deleteInput} onChange={(e) => {this.handleDeleteUserChange(e)}}></input>
                    <button onClick={this.deleteUser} type='primary'>Delete user</button>
                </form>
                </div>
            )
        }
    }

    displayAnimals() {
        if (this.state.displayAnimals) {
            return ( 
                <div>
                    <br />
                    {this.props.animals.map(animal =>
                    <div>{animal.animal}</div>)}
                </div>
            )
        }
    }

    handleAnimalInputChange(event) {
        this.setState({animalInput: event.target.value});
      }

    handleUserInputChange(event) {
        this.setState({userInput: event.target.value});
      }

    handleDeleteUserChange(event) {
        this.setState({deleteInput: event.target.value});
      }

    addAnimal() {
        Backend.addAnimal(this.state.animalInput)
    }

    addUser() {
        Backend.addUser(this.state.userInput, this.props.users)
    }

    deleteUser() {
        Backend.deleteUser(this.state.deleteInput)
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleUsersButton}>Display users</button>
                {this.displayUsers()}
                <button onClick={this.toggleAnimalsButton}>Display animals</button>
                {this.displayAnimals()}
                <button onClick={this.toggleAddUserButton}>Add user</button>
                {this.displayAddUser()}
                <button onClick={this.toggleDeleteUserButton}>Delete user</button>
                {this.displayDeleteUser()}
                <form>
                    <h1>Add new animal</h1>
                    <input className="input" value={this.state.animalInput} onChange={(e) => {this.handleAnimalInputChange(e)}}></input>
                    <button onClick={this.addAnimal} type='primary'>Add animal</button>
                </form>
            </div>
        )
    }
 }

 export default Frontend;