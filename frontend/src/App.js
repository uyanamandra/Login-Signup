import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

/* function App() {
	const name = "Ramesh Kumar";
	const value = 5;
  return (
    <div>
      <div>
        div1
      </div>
      <div>
	  {1+2} {/*evaluated as expression and output will be 3}
	  {name}
	  <p>
          {value === 5 ? ('Equal') : (value > 5 ? 'Greater than 5' : 'Less than 5') }
        </p>
      </div>
    </div>
  )
} */

/*  function App() {
  const name = 'Ramesh Kumar';
  const value = 5;
  const myStyle = {
    fontSize: 100
  }
  
  return (
    <div>
      <div>
        div1
      </div>
      <div>
        {1 + 2}
        {name}
        <p>
          {value === 5 ? ('Equal') : (value > 5 ? 'Greater than 5' : 'Less than 5') }
        </p>
        <p style={myStyle}>My bigger paragraph</p>
      </div>
    </div>
  )
}
*/

export const history = createBrowserHistory({
  basename: '/'
});

const renderComponent = (props, authRequired, Component) => {
	if (authRequired){
	//Check if user is logged in to access Dashboard
	if (localStorage.getItem('user')) {
      // user is logged in
      //return <Component />
    } else {
      return <Redirect to="/login" />
    }
	}	
  return <Component {...props} />
}

function App(){
	return(
	 <Router history={history}>
	   <Route exact path="/" component={Home} />
	   <Route exact path="/login" component={Login} />
	   <Route exact path="/signup" component={Signup} />
	   <Route exact path="/dashboard" render={(props) => renderComponent(props,true,Dashboard)} />
	 </Router>
	
	)
}

export default App;
