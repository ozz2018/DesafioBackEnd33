const { hash } = require('bcryptjs')
const mongoose = require('mongoose')

const modelName = 'posts'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    default: 'México',
    required: true
  },
  work: {
    type: String,
    default: 'Desarrollador',
    required: true
  },
  join: {
    type: Date,
    default: Date.now
  },
  hashtags: {
    type: String,
    default: '#Hola'
  },
  hashtags2: {
    type: String,
    default: '#Hola'
  },
  hashtags3: {
    type: String,
    default: '#Hola'
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  reactions: {
    type: String,
    default: '🔥'
  },
  reactions2: {
    type: String,
    default: '😤'
  },
  reactions3: {
    type: String,
    default: '🤯'
  },
  reactions4: {
    type: String,
    default: '🚀'
  },
  numberOfReactions: {
    type: Number,
    default: 1
  },
  numberOfComments: {
    type: Number,
    default: 1
  },

  image: {
    type: String
  }
})

module.exports = mongoose.model(modelName, postSchema)
