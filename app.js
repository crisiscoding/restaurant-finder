var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var favouritesRouter = require("./routes/favourites");

var indexRouter = require("./routes/index"); //out?
var usersRouter = require("./routes/users"); //out?

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter); //out?
app.use("/users", usersRouter); //out?
app.use("/favourites", favouritesRouter);
app.use(express.static(path.join(__dirname, "public"))); //
module.exports = app;
