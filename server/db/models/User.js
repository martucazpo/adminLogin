const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            default: "non-admin"
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)