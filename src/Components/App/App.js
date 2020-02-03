import React from 'react';
import './App.css';
import Frontend from '../Frontend/Frontend';
import Backend from '../../util/Backend';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      animals: [],
    }

    this.displayUsers = this.displayUsers.bind(this);
    this.displayAnimals = this.displayAnimals.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
  }

  /* *********PREVIOUS SETUP*******************
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }

*/

  displayUsers() {
    Backend.displayUsers().then(users => {
      this.setState({users: users})
      //console.log(this.state.users.length)
    })
  }

  displayAnimals() {
    Backend.displayAnimals().then(animals => {
      this.setState({animals: animals})
    })
  }

  addAnimal() {
    Backend.addAnimal().then(animals => {
      this.setState({animals: animals})
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Display data</h1>
        <Frontend users={this.state.users} animals={this.state.animals} displayUsers={this.displayUsers} displayAnimals={this.displayAnimals}
        addAnimal={this.addAnimal} />
      </div>
    )
  }

}

export default App;

