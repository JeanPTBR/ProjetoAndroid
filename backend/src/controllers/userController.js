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

export const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      success: false, error: "Email e senha são obrigatórios"
    });
  }

  try {
    const query = "SELECT * FROM usuarios WHERE email = ?";
    database.query(query, [email], async (err, results) => {
      if (err) return res.status(500).json({
        success: false,
        error: "Erro de consulta"
      });

      if (results.length === 0) {
        return res.status(401).json({
          success: false, error: "Credenciais inválidas"
        });
      }

      const user = results[0];
      const senhaValida = await bcrypt.compare(senha, user.senha);

      if (senhaValida) {
        const { senha, ...userSemSenha } = user;
        return res.json({
          success: true,
          user: userSemSenha
        });
      } else {
        return res.status(401).json({
          success: false,
          error: "Credenciais inválidas"
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Erro interno no servidor"
    });
  }
};

export const updateUserPassword = async (req, res) => {

  const { email, novaSenha } = req.body;

  if (!email || !novaSenha) {
    return res.json({
      success: false, message: 'Dados incompletos'
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(novaSenha, saltRounds);

    await database.query('UPDATE usuarios SET senha = ? WHERE email = ?', [hashedPassword, email]);
    res.json({
      success: true
    });

  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: 'Erro ao redefinir a senha'
    });
  }

};

export const updateUser = (req, res) => {
  const { nome, email, emailAtual } = req.body;

  if (!nome || !email || !emailAtual) {
    return res.status(400).json({
      error: "nome, email e emailAtual são obrigatórios"
    });
  }

  const query = 'UPDATE usuarios SET nome = ?, email = ? WHERE email = ?';
  database.query(query, [nome.trim(), email.trim(), emailAtual.trim()], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json({
      message: "Usuário atualizado com sucesso!",
      user: { nome: nome.trim(), email: email.trim() }
    });
  });
};
