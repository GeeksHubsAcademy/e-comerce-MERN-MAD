import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";
import * as authMiddlewares from '../middleware/authenticaction.js';
const { authentication } = authMiddlewares;
router.get('/', authentication, UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.patch('/', authentication, UserController.update);
router.delete('/:id', UserController.delete);

export default router;