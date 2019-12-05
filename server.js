var exphbs = require("express-handlebars");
var express = require("express");
const db = require("./models")
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function (req, res) {
  
      db.Exercise.findAll().then(foundExercises => {
        console.log(foundExercises);
        res.render("index", { exercises: foundExercises });
      });
    });

    app.post("/api/exercise", function(req, res) {
      db.Exercise.create(req.body).then(function(){
        res.redirect("/");
      });
    });
  // })

  // });
  // connection.query("SELECT * FROM input;", (err, data) => {
  //   if (err) throw error;
    // this will render the input form from the index.handlebars 
// });

// app.get("/:id", function (req, res) {
//   connection.query("SELECT * FROM input where id = ?", [req.params.id], (err, data) => {
//     if (err) throw error;
    
//     res.render("index", data[0]);
//   });
// });

// app.get("/:id", function (req, res) {
//   connection.query("SELECT * FROM input where id = ?", [req.params.id], (err, data) => {
//     if (err) throw error

//     console.log(data);
//     res.render("index", data[0]);
//   });
// });

// app.post("/api/input", function (req, res) {
//   connection.query("INSERT INTO input (name, type, sets, weights, comments) VALUES (?, ?)", [req.body.name, req.body.type, req.body.sets, req.body.weights, req.body.comments], (err, data) => {
//     if (err) throw err
//     res.json({ id: result.insertId });

//   });
// });


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

});