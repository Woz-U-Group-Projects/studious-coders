"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogProfileSchema = new Schema({
  User:{ firstName: { type: String, required: true }, lastName: { type: String, required: true }, posts: {type: String, requried: true}, likes: {type: boolean}, profile:{complete:{ type: boolean, required: true}},
  email: { type: String, required: true },
  password: {type: String, required: true},
});

// Duplicate the ID field.
blogProfileSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
blogProfileSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Profile", blogProfileSchema);
