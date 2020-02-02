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
    this.addAnimal = this.addAnimal.bind(this)
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
    })
  }

  displayAnimals() {
    Backend.displayAnimals().then(animals => {
      this.setState({animals: animals})
      //console.log(this.state.animals)
    })
  }

  addAnimal() {
    
    Backend.addAnimal().then(animals => {
      this.setState({animals: animals})
    
      console.log(this.state.animals)
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>DATA</h1>
        <Frontend users={this.state.users} animals={this.state.animals} displayUsers={this.displayUsers} displayAnimals={this.displayAnimals}
        addAnimal={this.addAnimal} />
      </div>
    )
  }

}

export default App;

