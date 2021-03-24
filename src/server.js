const express = require('express');
const ejs = require('ejs');
const path = require('path');

const router = require("./routers");
const { patch } = require('./routers');

const server = express();

server.engine("ejs", ejs.renderFile);
server.set("views", path.join(__dirname, "views"));

server.use(router);

server.listen(8080, () => {
  console.log("Server running at port 8080");
});