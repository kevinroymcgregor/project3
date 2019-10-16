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
        description: req.body.description,
        category: req.body.category
        // STB: req.body.STB,
        // bidReserve: req.body.bidReserve
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));

    user.items.push(newItem._id)
    user.save();

});

router.get("/getItems", (req,res) => {
    Item.find({enabled: true})
    .populate("sellerID")
    .sort({ createdDate: -1 })
    .then(items => res.json(items))
    .then(itemList => res.json(itemList))
    .catch(err => console.log(err));

})

router.get("/getItemByID/:ID", (req,res) => {
    Item.findById(req.params.ID)
    .populate("sellerID")
    .then(itemList => res.json(itemList))
    .catch(err => console.log(err));
})

router.put("/deleteItem/:ID", (req, res) => {
    Item.updateOne( {_id: req.params.ID}, {enabled: false})
    .then(console.log("Deleted Successfully"))
    .catch(err => console.log(err));
})

router.put("/updateItem/:ID", (req, res) => {
    Item.updateOne( {_id: req.params.ID}, {
        name: req.body.name,
        price: req.body.price,
        imgs: req.body.imgs,
        description: req.body.description,
        category: req.body.category
    })
    .then(console.log("Updated Successfully"))
    .catch(err => console.log(err));
})

module.exports = router;
