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
            deleteInputManually: '',
            animalInput: '',
            userInput: ''
        }

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
        this.deleteUserManually = this.deleteUserManually.bind(this);
        this.handleDeleteUserChange = this.handleDeleteUserChange.bind(this);
        this.displayDeleteUser = this.displayDeleteUser.bind(this);
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
                    <input className="input" value={this.state.deleteInputManually} onChange={(e) => {this.handleDeleteUserChange(e)}}></input>
                    <button onClick={this.deleteUserManually} type='primary'>Delete user</button>
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
        this.setState({deleteInputManually: event.target.value});
      }

    addAnimal() {
        Backend.addAnimal(this.state.animalInput)
    }

    addUser() {
        Backend.addUser(this.state.userInput, this.props.users)
    }

    deleteUserManually() {
        Backend.deleteUserManually(this.state.deleteInputManually)
    }

    deleteUserFromList(user) {
        let del; 
        del = this.props.users.filter(i => i === user)[0].username
        Backend.deleteUserFromList(del);
        this.props.displayUsers();
    }
    
    render() {
        // !!!The function that is activated when clicked needs to be 'bound' to 'this' and the function parameter ('user')!!!
        const userArr = this.props.users.map(user => {
            return (
                <div 
                    key={user.id}> 
                    {user.username} &nbsp;&nbsp;
                    <button 
                        onClick=
                        {this.deleteUserFromList.bind(this, user)}>DELETE
                    </button>
                </div>
            )
        })


        return (
            <div>
                <button onClick={this.toggleUsersButton}>Display users</button>
                {this.state.displayUsers ? userArr : ''}
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