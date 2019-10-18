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
        // STB: req.body.STB
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
    //Searching
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Item.find({ $text: { $search: regex } })
        .populate("sellerID")
        .limit(25)
        .exec(function(err, items){
            if(err){
                res.json(err);
            }else {
                res.json(items);
            }
        })
    } else {
    //Show me everything on the page if search not initiated
    Item.find()
    .populate("sellerID")
    .sort({ createdDate: -1 })
    .then(items => res.json(items))
    .then(itemList => res.json(itemList));
    }
})

router.get("/getItemByID/:ID", (req,res) => {
    Item.findById(req.params.ID)
    .populate("sellerID")
    .then(itemList => res.json(itemList));
})


//For Searching to prevent attacks
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
