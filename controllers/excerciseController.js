const express = require("express");
const router = express.Router();


const db = require("../models");
router.get("/", function (req, res) {

    db.Exercise.findAll().then(foundExercises => {
        console.log(foundExercises);
        res.render("index", { exercises: foundExercises });
    });
});

router.post("/api/exercise", function (req, res) {
    db.Exercise.create(req.body).then(function () {
        res.redirect("/");
    });
});
module.exports = router;