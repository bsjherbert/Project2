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

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Waynesworld13!",
  database: "quotes_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM input;", (err, data) => {
    if (err) throw error;
    // this will render the input form from the index.handlebars 
    res.render("index", { input: data });
  });
});

app.get("/:id", function (req, res) {
  connection.query("SELECT * FROM input where id = ?", [req.params.id], (err, data) => {
    if (err) throw error;
    // Need to change out the placeholder (#) with the handlebars file path we use
    res.render("#", data[0]);
  });
});

