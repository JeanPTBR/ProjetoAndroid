import express from "express";
import db from "../config/connectionDataBase.js";

const router = express.Router();

router.get("/dadosDosProdutos", (req, res) => {
  const nome = req.query.nome;
  let query = 'SELECT * FROM produtos';
  let values = [];
  if (nome) {
    query += ` WHERE nome LIKE ?`;
    values.push(`${nome}%`)
  }
  
  db.query(query, values, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

export default router;
