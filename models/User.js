const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create User Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        required: false
    },
    items: [{ type: Schema.Types.ObjectId, ref: "items"}]
});
module.exports = User = mongoose.model("users", UserSchema);