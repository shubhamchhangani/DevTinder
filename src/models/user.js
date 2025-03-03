const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    lastName: {
      type: String,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      set: (value) => value.toLowerCase(),
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      min: 16,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      defalut: "https://geographyandyou.com/images/user-profile.png",
    },
    about: {
      type: String,
      default: "This is defalut about of the user",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userScheme);
module.exports = User;
