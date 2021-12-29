const express = require('express');
const routes = express.Router();

const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController');
const ResultController = require('./controllers/ResultController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/users', UserController.store);
routes.get('/users', authMiddleware, UserController.index);

routes.post('/users/:user_id/results', authMiddleware, ResultController.store);
routes.get('/users/:_id/results', authMiddleware, ResultController.index);
routes.delete('/results/:_id',authMiddleware, ResultController.destroy);

routes.get('/profile',authMiddleware, ProfileController.index);

routes.post('/session', SessionController.store);

module.exports = routes;