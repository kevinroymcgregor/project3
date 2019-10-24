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

router.get("/getUserItems", (req,res) => {

    Item.find({enabled: true})
    .sort({ createdDate: -1 })
    .then(items => res.json(items))
    .then(itemList => res.json(itemList))
    .catch(err => console.log(err));

})


//For Searching to prevent attacks
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

//SHOPPING CART ROUTING
router.get('/add-to-cart/:id', function(req, res, next) {
    var itemID = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Item.findById(itemID, function(err, item) {
       if (err) {
           return console.log(err);
       }
        cart.add(item, item._id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/dashboard');
    });
});

router.get('/remove/:id', function(req, res, next) {
    var itemID = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(itemID);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('shop/shopping-cart', {items: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {items: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_9lyhaU1ouzZkomnNocp02Ki800M8dFSfg9"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought item!');
            req.session.cart = null;
            res.redirect('/dashboard');
        });
    }); 
});

module.exports = router;
