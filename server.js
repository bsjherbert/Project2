var exphbs = require("express-handlebars");
var express = require("express");
const db = require("./models")
var app = express();
var session = require("express-session");
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(session({
  secret: "long long trail"
}))
app.use((req, res, next) => {
  if (!req.session.userId) {
    return next();
  }

  db.User.findByPk(req.session.userId)
    .then(user => {
      if (!user) {
        console.log("Cannot find user in session, destroying session.");
        return req.session.destroy(err => {
          if (err) throw err;
        });
      }

      req.user = user;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      next();
    });
});
var auth = require("./controllers/authController")
var exercise = require("./controllers/excerciseController")
app.use(auth, exercise)



db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

});
