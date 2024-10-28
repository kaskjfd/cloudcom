const express = require("express");
const router = express.Router();
const supplier = require("./app/controller/supplier.controller");

// list all the suppliers
router.get("/suppliers/", supplier.findAll);
// show the add supplier form
router.get("/supplier-add", (req, res) => {
    res.render("supplier-add", {});
});
// receive the add supplier POST
router.post("/supplier-add", supplier.create);
// show the update form
router.get("/supplier-update/:id", supplier.findOne);
// receive the update POST
router.post("/supplier-update", supplier.update);
// receive the POST to delete a supplier
router.post("/supplier-remove/:id", supplier.remove);

module.exports = router;
