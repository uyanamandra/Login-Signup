/* import React from 'react';
import './home.css';

function Home() {
  return (
    <div>
	  <h2 className="center-aligned-text">Welcome to my App</h2>
	  <p>
	     <a href="/login">Login</a>
		 <a href="/signup">Signup</a>
		 <a href="/dashboard">Dashboard</a>
	  </p>
	</div>
  )
}

export default Home; */ //This code causes all components to load multiple times. the below code prevents it 

//Single page application, we do not load pages/componenets multiple times. on First click they are loaded.

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div>
      <h2 className="center-aligned-text">Welcome to my App</h2>
      <p>
         <Link to="/login">Login</Link>
         <Link to="/signup">Signup</Link>
         <Link to="/dashboard">Dashboard</Link>
      </p>
    </div>
  )
}

export default Home;