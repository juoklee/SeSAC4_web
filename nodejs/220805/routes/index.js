const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

visitorRouter.get("/", visitor.get_visitors);
visitorRouter.post("/write", visitor.post_comment);

module.exports = visitorRouter; 