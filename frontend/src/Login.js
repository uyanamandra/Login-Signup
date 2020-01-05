import React from 'react';
import { Link } from 'react-router-dom';

import { history } from './App';

class Login extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    };
	this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
	this.onLoginClick = this.onLoginClick.bind(this);
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
  
  
  onLoginClick() {
    const data = this.state;
    // using fetch to make API call
	console.log(data);
    fetch('/login/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 
          'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
		console.log(data);
		localStorage.setItem('user', JSON.stringify(data.data));
		history.push('/dashboard');
	})
    .catch(error => console.log(error));
    
  }
  
  
  render() {
    return (
      <div>
        <p>
          Email: <input type="email" value={this.state.email} onChange={this.onEmailChange} />
        </p>
        <p>
          Password: <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
        </p>
        <p>
          <button onClick={this.onLoginClick}>Login</button>
        </p>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    )
  }
  
}

export default Login;


