const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const server = express();

mongoose.connect(
  "mongodb+srv://brasileirodev:123leao@cluster0-pzoae.mongodb.net/TinDevWeek8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
