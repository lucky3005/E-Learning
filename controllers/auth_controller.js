const bcrypt = require("bcrypt");
require("dotenv").config();

const UserModel = require("../models/auth_model");
const { validationResult } = require("express-validator");
const Token = require("../helper/jwt_token");

//Sign-Up
async function RegisterPostController(req, res) {

    const { name, email, password } = req.body;
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                msg: "Enter valid Name, Email or Password",
            });
        }

        // Check for duplicate email
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already in use" });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        if (!hashedPassword) {
            return res.status(400).json({ msg: "Not Created" });
        }

        const user = await UserModel.create({
            name,
            email,
            password: hashedPassword
        });

        if (!user) {
            return res.status(400).json({ msg: "Not Created" });
        }

        return res.status(200).json({ msg: "User Created" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error" });

    }

}

//Sign-In
async function SignInPostController(req, res) {
    const { email, password } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                msg: "Enter valid Email or Password",
            });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: "User not found",
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: "Enter Password",
            });
        }

        const payLoad = {
            id: user._id,
        }

        const token = Token.TokenGenerator(payLoad);

        if (user && user._doc) {
            const { password, createdAt, updatedAt, address, __v, ...userWithoutPassword } = user._doc;

            return res.status(200).json({
                token: token,
                msg: "Login Successfully!",
                ...userWithoutPassword
            });
        }



    } catch (error) {
        return res.status(500).json({
            msg: error.message
        });
    }

}

//Verification
async function TokenVerificationPostController(req, res) {
    const token = req.header("Token");
    try {
        if (!token) {
            return res.json(false);
        }

        const isVerified = Token.TokenVerification(token);

        if (!isVerified) {
            return res.json(false);
        }

        const user = await UserModel.findOne(isVerified._doc);

        if (!user) {
            return res.json(false);
        }

        return res.json(true);

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}




module.exports = { RegisterPostController, SignInPostController, TokenVerificationPostController };