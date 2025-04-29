import database from "../config/connectionDataBase.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const registerUser = async (req, res) => {

  const {
    nome,
    email,
    senha
  } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios"
    });
  }

  try {

    const checkEmailSql = 'SELECT * FROM usuarios WHERE email = ?';
    database.query(checkEmailSql, [email], async (err, results) => {
      if (err) return res.status(500).json({
        error: "Erro ao verificar email"
      });

      if (results.length > 0) {
        return res.status(400).json({
          error: `Ops!\nEsse email: ${email} já está cadastrado`
        });
      }

      const senhaHash = await bcrypt.hash(senha, saltRounds);
      const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

      database.query(sql, [nome, email, senhaHash], (err, result) => {

        if (err) return res.status(500).json({
          error: "Erro ao cadastrar usuário"
        });

        return res.json({
          success: true, user: { id: result.insertId, nome, email },
        });

      });

    });

  } catch (error) { return res.status(500).json({ error: "Erro interno no servidor" }); }

};
