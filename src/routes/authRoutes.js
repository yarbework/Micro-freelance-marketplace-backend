import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.status(200).json({ message: "Register endpoint stub" });
});

router.post("/login", (req, res) => {
    res.status(200).json({ message: "Login endpoint stub" });
});

export default router;