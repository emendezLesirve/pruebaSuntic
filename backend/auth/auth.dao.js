const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}

const authModel = mongoose.model('Users', authSchema);//Aqui se crea la tabla automaticamente
module.exports = authModel;