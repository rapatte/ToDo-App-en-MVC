const { response } = require("express");
const Task = require("../models/tasks");

exports.findAll = (request, response) => {
  Task.getAll((error, tasks) => {
    if (error) {
      response.send(error.message);
    }

    response.render("home.ejs", { tasks });
  });
}