const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default:"user"
    },
    address: {
        type: String,
        default:""
    }
},
    {
        timestamps: true
    }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;