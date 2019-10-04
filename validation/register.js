const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state: "";
  data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : "";

  // Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }

  // Location checks
  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required";
  }
  if (Validator.isEmpty(data.state)) {
    errors.state = "State is required";
  }
  if (Validator.isEmpty(data.zipCode)) {
    errors.zipCode = "Zip Code is required";
  }
  
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

