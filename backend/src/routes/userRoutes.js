import express from "express";
import { registerUser, loginUser, updateUser, updateUserPassword } from "../controllers/userController.js";

const router = express.Router();


router.put("/UpdateUser", updateUser);

router.put("/UpdatePasswordUser", updateUserPassword);

router.post("/register", registerUser);
router.get("/register", (req, res) => {
    res.send("Voce esta na pagina de cadastro");
});
