import express from "express";
const router = express.Router();
import OrderController from "../controllers/OrderController.js";
import * as authMiddlewares from '../middleware/authenticaction.js';
const { authentication } = authMiddlewares;
router.get('/', authentication, OrderController.getAll);
router.post('/', authentication, OrderController.insert);
router.patch('/:id', authentication, OrderController.update);
router.delete('/:id', authentication, OrderController.delete);

export default router;