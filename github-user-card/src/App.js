import React from 'react';
import './App.css';
import Card from './Components/Card';



class App extends React.Component{
  constructor () {
    super ();
    this.state={
      user: {}
       }
    }
    fetchUser = () => {
      fetch('https://api.github.com/users/CarlaMarvin78')
        
      .then(response => {
        return response.json();
      })
        .then(user => this.setState({user: user}))
        .catch(err => {
          console.log(err);
          
        });
    };
    componentDidMount() {
      this.fetchUser();
    }
  render () {    
    return  (
    <div className="App">
      <header className="App">
        Github Users
      </header>
      <Card user={this.state.user}/>
    </div>
  );
    }
}
export default App;
