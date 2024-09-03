const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

const TodoModel = mongoose.model("Todos", todoSchema)
module.exports = TodoModel