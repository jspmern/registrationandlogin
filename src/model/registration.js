let mongoose = require("mongoose");
//this is the thrid party validator
let validator = require("validator");
//this is the registration schema design
let registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
    minLength: [4, "fullName must be grater then 4"],
    validate(value) {
      if (!(value.length > 5)) {
        throw new Error("fullName must be grater then 5");
      }
    },
  },
  userName: {
    type: String,
    unique: [true,'user is already there'],
    require: true,
    validate(value) {
      const usernameRegex = /^[a-zA-Z0-9_][a-zA-Z0-9_]*$/;
      if (!usernameRegex.test(value)) {
        throw new Error("give validate userName");
      }
    },
  },
  password: {
    type: String,
    require: true,
    validate(value) {
      if (!(value.length > 6)) {
        if (!value.toLowerCase().includes(this.fullName.toLowerCase())) {
          throw new Error("Password should not contain the username");
        }
        throw new Error("password must be grater then 6");
      }
    },
  },
  mobile: {
    type:String,
    require: true,
    min:10,
  },
  email: {
    require: true,
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(
          "your email is not validated  always give the according the email standered"
        );
      }
    },
  },
  profilePicture: {
    type: String,
  },
});

//this is for model
let Detail = mongoose.model('Student',registrationSchema)
module.exports=Detail
