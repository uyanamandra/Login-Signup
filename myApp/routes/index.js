const express = require('express');
const router = express.Router();

/* router.get('/', (req, res) => {
  const cookies = req.signedCookies;
  //console.log(cookies);
  //res.render('home');
  // cookie name is auth
  if (cookies.auth) {
    // user is authenticated
    //res.render('home');
	res.render('home', {name: 'my name'});
  } else {
    res.redirect('/login');
  }
}); */

const users = [];

router.get('/', (req, res) => {
  const signedCookies = req.signedCookies;
  if (signedCookies.auth) {
    const email = signedCookies.auth;
    let user;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        user = users[i];
        break;
      }
    }
    if (user) {
      res.render('home', user);
    } else {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }
});

router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});



router.get('/login', (req, res) => {
  res.render('login');
});

/* router.post('/login', (req, res) => {
  const formData=req.body;
  console.log(formData); // this is server side code. console will print on cmd for local server.
  res.json({
	success: true,
	message: 'login success'
  });
}); */


/* router.post('/login', function(req, res) {
  const data = req.body;
  // console.log(data);  
  if (data.email === 'uma@gmail.com' && data.password === 'test') {
    // success
	res.cookie('auth', data.email, {maxAge: 60*60*1000,httpOnly: true, signed: true}); // 1 hour - setting cooking for an hour
	// when cookie is present then user is logged in. when cookie is absent user is not logged in
    res.json({
      success: true
    });
  } else {
    // failure
    res.json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});*/  //login route using hard coded email and password

router.post('/login', (req, res) => {
  //console.log(req.body, req.cookies, req.signedCookies);
  const data = req.body;

  // iterate over user array and check if this user exists
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === data.email && users[i].password === data.password) {
      res.cookie('auth', data.email, {
        maxAge: 60 * 60 * 1000, // 1 hour 
        httpOnly: true, 
        secure: false, 
        signed: true
      });
	  res.json({
        success: true,
        data: users[i]
      });
      return;
    }
  }

  res.json({
    success: false,
    message: 'Invalid credentials'
  });
});



router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  const data = req.body;
  console.log(data);
  if (data.name && data.email && data.password) {
    // check if user alread exists
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === data.email) {
        res.json({ 
          success: false, message: 'This email is already taken. Try login' 
        });
        return;
      }
    }
    users.push(data);
    res.cookie('auth', data.email, {
      maxAge: 60 * 60 * 1000, httpOnly: true, secure: false, signed: true
    });
    res.json({ success: true, data });
  } else {
    res.json({ success: false, message: 'All params are required' });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.json({success: true});
  // res.redirect('/login');
});


module.exports = router; 

