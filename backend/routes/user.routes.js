import express from "express";
import { signup, signin } from "../controllers/user.controller.js"; 

const router = express.Router();

// Define the signup route
router.post("/signup", async (req, res) => {
    try {
        console.log("Signup route accessed"); 
        await signup(req, res); 
    } catch (error) {
        console.error("Error in /signup route:", error.message);
        res.status(500).json({ message: "Internal server error during signup." });
    }
});

// Define the signin route
router.post("/signin", async (req, res) => {
    try {
        console.log("Signin route accessed"); 
        await signin(req, res); 
    } catch (error) {
        console.error("Error in /signin route:", error.message);
        res.status(500).json({ message: "Internal server error during signin." });
    }
});

export default router;


