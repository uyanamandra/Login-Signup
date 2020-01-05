import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      password: ''
    };
	this.onNameChange = this.onNameChange.bind(this);
	this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
	this.onSignupClick = this.onSignupClick.bind(this);
  }
  
  onUsernameChange(event) {
    console.log(event);
    const username = event.target.value;
    console.log(username);
  }

onNameChange(event) {
    const name = event.target.value;
    this.setState({
      name: name
    });
  }
  
  onEmailChange(event) {
    const email = event.target.value;
    this.setState({
      email: email
    });
  }
  
  onPasswordChange(event) {
    const password = event.target.value;
    this.setState({
      password: password
    });
  }
  
  
  onSignupClick() {
    const data = this.state;
    // using fetch to make API call
	console.log(data);
    fetch('/signup/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 
          'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
  }
  
  
  render() {
    return (
      <div>
        <p>
          Name: <input type="text" value={this.state.name} onChange={this.onNameChange} />
        </p>
        <p>
          Email: <input type="email" value={this.state.email} onChange={this.onEmailChange} />
        </p>
        <p>
          Password: <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
        </p>
        <p>
          <button onClick={this.onSignupClick}>Signup</button>
        </p>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    )
  }
  
}

export default Signup;


