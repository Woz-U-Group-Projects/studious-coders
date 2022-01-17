const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userProfileSchema = new Schema({
  User:{ firstName: { type: String, required: true }, lastName: { type: String, required: true }, posts: {type: String, requried: true}, likes: {type: boolean}, profile:{complete:{ type: boolean, required: true}},
  email: { type: String, required: true },
  password: {type: String, required: true}
},
})

// Duplicate the ID field.
userProfileSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userProfileSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Profile", userProfileSchema);

