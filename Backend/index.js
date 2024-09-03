const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/')

app.post('/add', (req, res) => {
  const todo = req.body.todo
  TodoModel.create({
    todo: todo
  }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
  TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
  const { id } = req.params
  TodoModel.findByIdAndUpdate({ done: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})