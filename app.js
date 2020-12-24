const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
require("dotenv").config();
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('client/build'))

// database connection
const dbURI =
  "mongodb+srv://m001-student:m001-password@sandbox.yqnjh.mongodb.net/reacttest?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) => {
  res.send("Sent from home route");
});
app.post("/add", (req, res) => {
  User.create({
    name: req.body.name,
    height: req.body.height,
  }).then((res) => {
    res.send("Added new user");
  });
});

app.get("/read", (req, res) => {
  User.find({}).then((result) => {
    res.json(result);
  });
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Listening at port 3000");
});
