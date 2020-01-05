import React from 'react';
import { history } from './App';


function Dashboard(props) {
	let user = localStorage.getItem('user');
	user = JSON.parse(user);
	console.log(user);
	
  const onLogoutClick = () => {
      fetch('/logout')
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            localStorage.removeItem('user');
            history.push('/login');
          }
        });
    };	
	
  return (
    <div>Hello {user.name}
	<button onClick={onLogoutClick}>Logout</button>
	</div>
  )
}

export default Dashboard;