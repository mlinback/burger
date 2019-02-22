// Inside the `burgers_controller.js` file, import the following:

// * Express
// * `burger.js`

//  Create the `router` for the app, and export the `router` at the end of the file.

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//post new burgers
router.post("/burger/create", function(req, res) {
  burger.insertOne([req.body.burger_name], function(result){
    res.redirect("/");
  })
})

//devours selected burger
router.post("/burger/eat/:id", functio(req, res) {
  burger.updateOne([req.params.id], function(result) {
    res.redirect("/");
  })
})

// Export routes for server.js to use.
module.exports = router;
