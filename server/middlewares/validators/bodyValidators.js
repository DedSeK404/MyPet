const { body, validationResult } = require("express-validator");
const customError = (errors) => errors.map((e) => ({ msg: e.msg }));

module.exports.registerRules = [
  body("first_name")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("first name must be more than 3 characters"),
  body("last_name")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("last name must be more than 3 characters"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .withMessage("enter a valid email "),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password cannot be less than 8 characters"),
  body("adress")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("please enter a valid adress"),
  body("birth_date")
  .isISO8601()
  .toDate()
  .withMessage("please select a date"),
];

module.exports.editUserRules = [
  body("first_name")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("first name must be more than 3 characters"),
  body("last_name")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("last name must be more than 3 characters"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .withMessage("enter a valid email "),
  body("adress")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("please enter a valid adress"),
  body("birth_date")
  .isISO8601()
  .toDate()
  .withMessage("please select a date"),
];

module.exports.loginRules = [
  body("email").isEmail().withMessage("enter a valid email "),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password cannot be less than 8 characters"),
];

module.exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: customError(errors.array()) });
  }
  return next();
};
