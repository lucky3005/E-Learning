const { check } = require("express-validator");


const RegisterValidator = [
    check("name", "Name is required").not(),
    check("email", "Enter a valid email or password").isEmail().not(),
    check("password", "The min length of Password is 6 and should contain 1 upperCase, 1 lowerCase, 1 number, 1 specialSymbol").isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1
    }),
]


module.exports = RegisterValidator