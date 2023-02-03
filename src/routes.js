const express = require("express");
const routes = express.Router();

const { isAdmin, isAuthenticated } = require("./middlewares/auth");

const UserController = require("./controllers/UserController");
const ResultController = require("./controllers/ResultController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post("/users", UserController.store);
routes.get("/users", isAuthenticated, isAdmin, UserController.index);

routes.post("/users/:user_id/results", isAuthenticated, ResultController.store);
routes.get("/users/:user_id/results", isAuthenticated, ResultController.index);
routes.delete("/results/:_id", isAuthenticated, ResultController.destroy);

routes.get("/profile", isAuthenticated, ProfileController.index);

routes.post("/session", SessionController.store);

module.exports = routes;
