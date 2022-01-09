const express = require('express');
const apiRouter = require('./routes/api');
const { connect } = require('./db');

const port = process.env.PORT || 3000;

connect().then(
  () => console.log('Connected!'),
  (err) => console.error(err)
);

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Testing my server');
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
