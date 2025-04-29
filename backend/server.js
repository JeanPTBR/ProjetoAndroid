import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoutes);
app.use("/", productRoutes);

app.get("/", (req, res) => {
  res.send("Seja bem-vindo à API!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
