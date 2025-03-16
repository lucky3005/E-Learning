const express = require("express");
const AuthRouter = express.Router();  

const RegisterValidator = require("../helper/validator");
const Auth = require("../controllers/auth_controller")

AuthRouter.post("/register", RegisterValidator, Auth.RegisterPostController);
AuthRouter.post("/sign-in", RegisterValidator, Auth.SignInPostController);
AuthRouter.post("/token", Auth.TokenVerificationPostController);

module.exports = AuthRouter;
