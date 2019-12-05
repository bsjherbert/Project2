const express = require("express");
const router = express.Router();


const db = require("../models");
router.get("/", function(req, res) {
    console.log(req.user)
    if(!req.user){
        return res.redirect("/userlogin")
    }
    console.log(req.user)
    db.Exercise.findAll({ where: { UserId: req.user.id } })
    .then(exercises => {
      res.render("index", {
        user: req.user,
        workouts: exercises
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });

  });
router.get("/login",function (req, res) {
    res.render("login")
})
router.get("/userlogin", function (req, res) {
    res.render("userlogin")
})
router.post("/api/exercise", function (req, res) {
    if (!req.user) {
        return res.status(403).end();
      }
    req.body.UserId = req.user.id
    console.log("test<=====++++++=======>")
    console.log(req.body)
    db.Exercise.create(req.body).then(function () {
        res.redirect("/");
    });
});
module.exports = router;