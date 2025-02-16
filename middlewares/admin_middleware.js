const Token = require("../helper/jwt_token");
const UserModel = require("../models/auth_model");

async function Admin(req, res, next) {
    const token = req.header("Token");
    try {
        if (!token) {
            return res.status(401).json({
                msg: "No token found, access denied"
            });
        }
        const isVerified = Token.TokenVerification(token);

        if (!isVerified) {
            return res.status(401).json({
                msg: "Token verification failed, access denied"
            });
        }
        
        const isAdmin = await UserModel.findOne({ _id: isVerified.id, type: "admin" });
        if (!isAdmin) {
            return res.status(401).json({
                msg: "You are not authorized to access this route"
            });
        }
        req.user = isVerified.id;
        req.token = token;
        next();
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = Admin;