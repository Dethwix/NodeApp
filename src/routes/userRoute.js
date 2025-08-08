import express from 'express';
const route = express.Router();
import userController from '../controllers/userController.js';

route.post('/register', userController.register);


export default route;