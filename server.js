require ("dotenv").config();

const express = require('express');
const path = require ('path');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send("My Week 2 API!");
})

app.use(express.json());
app.post('/user', (req, res) => {
  console.log (req.body)
  res.json({ user: req.body})
})


app.post('/user/id', (req, res) => {
  const id = req.params;
  console.log( 'name');
   res.send("Hello");
})


app.get('/search/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
   res.send(id);
})


app.use((err, req, res, next) => {
  console.error (err.stack);
  res.status(400).json({error: "Something Not Found!"});
});

app.get('/search/:id', (req, res) => {
  const id = req.query.id;
  console.log(id);
   res.send(id);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})