const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      required: true,
      enum: ["donar", "organization", "hospital", "admin"],
    },
    // is required if userType donar or admin
    name: {
      type: String,
      required: function () {
        if (this.userType == "admin" || this.userType == "donar") {
          return true;
        }
        return false;
      },
    },
    // is required if userType hospital
    hospitalName: {
      type: String,
      required: function () {
        if (this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },
    // is required if userType organization
    organizationName: {
      type: String,
      required: function () {
        if (this.userType == "organization") {
          return true;
        }
        return false;
      },
    },
    // is required if userType organization or hospital
    website: {
      type: String,
      required: function () {
        if (this.userType == "organization" || this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },
    address: {
      type: String,
      required: function () {
        if (this.userType == "organization" || this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
