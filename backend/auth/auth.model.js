const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  idType: {
    type: String,
    required: true,
    trim: true
  },
  identificationNumber: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  confirmEmail: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
    timestamps: true
  });

module.exports = userSchema;