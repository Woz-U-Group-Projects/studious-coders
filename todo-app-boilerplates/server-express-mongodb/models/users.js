
"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: { firstName: { type: String, required: true }, lastName: { type: String, required: true }},
  email: { type: String, required: true },
  password: {type: String, required: true},
  complete: { type: Boolean, required: true }
});

// Duplicate the ID field.
UsersSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UsersSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("User", UsersSchema);
