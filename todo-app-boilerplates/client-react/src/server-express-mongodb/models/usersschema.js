const mongoose = require('mongoose')

var UsersSchema = mongoose.Schema({
  email:String,
  firstname: String,
  lastname: String,
  password: String
});

// Duplicate the ID field.
/*
UsersSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UsersSchema.set("toJSON", {
  virtuals: true
});
 */
module.exports = mongoose.model("users", UsersSchema);
