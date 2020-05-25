const express = require('express')
const bodyParser = require('body-parser')
const asm1Router = require('./src/route/assignment_1')
const asm2Router = require('./src/route/assignment_2')
const asm3Router = require('./src/route/assignment_3')
const app = express()

// set cors allow // 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// body parser // 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', asm1Router)
app.use('/api', asm2Router)
app.use('/api', asm3Router)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3100, () => {
  console.log('Start server at port 3100.')
})
