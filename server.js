const express = require('express'); // Require express
const bodyParser = require('body-parser'); // to read the body of the request.


const app = express(); // App is an express function
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());


app.listen(8000, () => { // Listen on port 8000
    console.log('NodeJS server started!');
  });

  app.get('/', function(req, res){
    res.send('Server is running!');
  });

  //When at below route, do something.
  // req -> request. We can access to the headers or the body.
  // res -> response. Send back soem other stuff.
  app.route('/api/cats').get((req, res) => {

    res.send({
      cats: [{ name: 'Nova' }, { name: 'Pasa' }, { name: 'Tekir' }, { name: 'Sarikiz' }, { name: 'Duman' }]
    });
  });

  app.route('/api/cats').post((req, res) => {

    res.send(201, req.body);

  });

   // name here is a route parameter, similar to what we have in Angular.
  app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({
      name: requestedCatName
    });
  });

  app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });

  app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
  });