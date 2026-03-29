import express from "express";
import { signUp, login } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', signUp);
router.post('/login', login);

router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: `Hello ${req.user.name}, you accessed a protected route!` });
});

export default router;