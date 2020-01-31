import React from 'react';
import './App.css';
import Frontend from '../Frontend/Frontend';
import Backend from '../../util/Backend';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this.displayUsers = this.displayUsers.bind(this);
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
  
  render() {
    return (
      <div className="App">
        <h1>DATA</h1>
        <Frontend users={this.state.users} displayUsers={this.displayUsers} />
      </div>
    )
  }

}

export default App;

