require ("dotenv").config();

const express = require('express');
const path = require ('path');

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.send("My Week 2 API!");


  app.get('/', (req, res) => {
  res.send("My week 2 API!");
})
})

app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
   res.send(id);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})