import logo from './logo.svg';
import {Component} from 'react'
import './App.css';




export default class App extends Component{
  state = {username:null};

  componentDidMount () {
    fetch('/api/getUsername')
      .then(res => {
        if(!res.ok) throw new Error("Network response was not ok");
        return res.json();
        }
        
      )
      .then(user => this.setState({username: user.username}))
      .catch(error => this.setState({error: error.message}))
      
      
  }

  render () {
    const {username} = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1>:<h1>Loading... Please wait</h1>}
        <img src={logo} alt='react' />
      
      </div>
    )
  }
}
