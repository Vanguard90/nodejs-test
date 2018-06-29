const express = require('express'); // Require express
const bodyParser = require('body-parser'); // to read the body of the request.

const app = express(); // App is an express function
app.use(bodyParser.json());

app.listen(8000, () => { // Listen on port 8000
    console.log('Server started!');
  });

  app.get('/', function(req, res){
    res.send('Homepage');
  });

  //When at below route, do something.
  // req -> request. We can access to the headers or the body.
  // res -> response. Send back soem other stuff.
  app.route('/api/cats').get((req, res) => {

    res.send({
      cats: [{ name: 'Lilly' }, { name: 'Lucy' }]
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