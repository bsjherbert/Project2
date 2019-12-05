const express = require("express");
const router = express.Router();


const db = require("../models");
router.get("/", function(req, res) {
    // read all workouts from database and assign them to a variable "workouts"
    //var workouts = db.findall(logic to find all workouts in mysql db)
    //res.render ("index", workouts)
    //temporary hard coded data
    res.render("index", {
      workouts: {
        workout1: {
          id: 1,
          name: "Bench Press",
          type: "Strength",
          sets: 5,
          reps: 10,
          weight: 50
        },
        workout2: {
          id: 2,
          name: "Squats",
          type: "Strength",
          sets: 5,
          reps: 10,
          weight: 50
        }
      }
    });
  });

router.post("/api/exercise", function (req, res) {
    db.Exercise.create(req.body).then(function () {
        res.redirect("/");
    });
});
module.exports = router;