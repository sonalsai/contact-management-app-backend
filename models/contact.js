const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    contactName: String,
    contactNumber: Number,
    contactEmail: String,
    dateCreated: Number,
  },
  { collection: "contactDatas" }
);

const UserModel = new mongoose.model("contacts", UserSchema);
module.exports = UserModel;
