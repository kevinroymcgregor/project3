const express = require("express");
const router = express.Router();

// Load User model
const Item = require("../../models/Item");
const User = require("../../models/User");

// @route POST api/users/register
router.post("/addItem", async (req, res) => {

    const user = await User.findOne({_id: req.body.sellerID})
    
    const newItem = new Item({
        name: req.body.name,
        //Seller ID should be pulled automatically based on the state of the signed in user
        sellerID: req.body.sellerID,
        imgs: req.body.imgs,
        price: req.body.price,
        desc: req.body.desc,
        STB: req.body.STB,
        bidReserve: req.body.bidReserve
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));

    user.items.push(newItem._id)
    user.save();

});

router.get("/getItems", (req,res) => {
    Item.find()
    .populate("sellerID")
    .then(itemList => res.json(itemList));
})

router.get("/getItemByID/:ID", (req,res) => {
    Item.findById(req.params.ID)
    .populate("sellerID")
    .then(itemList => res.json(itemList));
})

module.exports = router;
