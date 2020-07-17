var express = require("express");
var router = new express.Router({ mergeParams: true });
var db = require("../models");
var mongoose = require("mongoose");
var helper=require("../helper/todo")
router.route("/")
.get(helper.getTodos)
.post(helper.createTodos)



router.route("/:todoId")
.get(helper.showTodos)
.put(helper.updateTodos)
.delete(helper.deleteTodos)



module.exports = router;
