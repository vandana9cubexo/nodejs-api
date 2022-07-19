const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }));
//Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/first.html');
  });
//Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/first.html');
  });
  app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });
  const port = 4000
app.listen(port, () => console.log(`This app is listening on port ${port}`));


