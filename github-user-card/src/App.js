import React from 'react';
import './App.css';
import UserList from './Components/UserList';



class App extends React.Component{
  constructor () {
    super ();
    this.state={
      users: []
       }
    }
    fetchFollowers=(url)=>{
      fetch(url)
      .then(response=>response.json())
      .then(followers => {
        followers.forEach(follower=>{
          fetch(follower.url)
          .then(response => response.json())
          .then(user=> this.setState({users: [...this.state.users, user]}))
        })
      })
    };
    fetchUsers = () => {
      fetch('https://api.github.com/users/CarlaMarvin78')
        
      .then(response => {
        return response.json();
      })
        .then(user => {
          this.setState({users: [...this.state.users, user]});
          this.fetchFollowers(user.followers_url);
        })
        .catch(err => {
          console.log(err);
          
        });
    };
    componentDidMount() {
      this.fetchUsers();
    }
  render () {    
    return  (
    <div className="App">
      <header className="App">
        <h1>Github Users</h1>
      </header>
      <UserList users={this.state.users}/>
    </div>
  );
    }
}
export default App;
