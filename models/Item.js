const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const User = require("./User/User.js")

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sellerID: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    }],
    //The imgs is setup to accept an array of img file locations
    imgs: [
        {
            type: String,
            required: true
        }
    ],
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastMod: {
        type: Date,
        default: Date.now
    },
    enabled: {
        type: Boolean,
        default: true
    },
    // S = Sell, T = Trade, B = Bid.  
    STB: {
        type: String,
        default: "S"
    },
    viewCount: {
        type: Number,
        default: 0
    },
    hiBid: {
        type: Number,
        default: 0
    },
    bidReserve: {
        type: Number,
        default: 0
    }
    // currentHiBidUID: {
    //     type: Schema.Types.ObjectId,
    //     required: false,
    //     ref: "User"
    // }
});
module.exports = Item = mongoose.model("items", ItemSchema);