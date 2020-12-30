const burger = require("../models/burger");
const express = require("express");
const { selectAll, insertOne, updateOne } = require("../config/orm");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burger: data });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, 0], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let eaten = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        eaten,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            };
            res.status(200).end();
        }
    );
});

module.exports = router;