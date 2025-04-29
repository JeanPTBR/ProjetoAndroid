import express from "express";
import { registerUser, loginUser, updateUser, updateUserPassword } from "../controllers/userController.js";

const router = express.Router();
