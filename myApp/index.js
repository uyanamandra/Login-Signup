/* // create one server (index.js)

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const port = 3000;
server.listen(port, function() {
  console.log('Server listening at port: ' + port);
});
  
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile); //need to install ejs module
app.set('view engine', 'html');
app.use('/', require('./routes'));
app.use('/', express.static(path.join(__dirname, 'public'))); //curent directory path picked from script/css tags

app.use(bodyParser.urlencoded({
  limit: '8mb',
  extended: true
})); // support encoded bodies

app.use(bodyParser.urlencoded({
  limit: '8mb',
  extended: true
})); // support encoded bodies */



const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);

const port = 3000;
server.listen(port, function() {
  console.log('Server listening at port: ' + port);
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json({
  limit: '8mb'
})); // support json encoded bodies. app.use is middleware.. sequenced before app.use directory.

app.use(bodyParser.urlencoded({
  limit: '8mb',
  extended: true
})); // support encoded bodies

app.use(cookieParser('test'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));
app.use('/api', require('./routes/api'));