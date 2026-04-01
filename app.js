import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import profileRoutes from "./src/routes/userProfile.route.js";
import reviewRoutes from "./src/routes/userReview.route.js";

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.get("/health", (req, res) => res.send("Server is running"));
app.use("/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api", reviewRoutes);

export default app;