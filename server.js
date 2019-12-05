var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
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

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Waynesworld13!",
//   database: "quotes_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
