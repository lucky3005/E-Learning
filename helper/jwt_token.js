const jwt = require("jsonwebtoken");
require("dotenv").config();

function TokenGenerator(payLoad) {
    return jwt.sign(payLoad, process.env.SECRET_KEY, { algorithm: "HS256" });
}

function TokenVerification(token) {
    return jwt.verify(token,process.env.SECRET_KEY);
}

module.exports = {
    TokenGenerator,
    TokenVerification
}