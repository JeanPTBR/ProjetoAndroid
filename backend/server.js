const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projeto",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

app.post("/register", (req, res) => {
  const { nome, email, senha } = req.body;

  const checkEmailSql = "SELECT * FROM usuarios WHERE email = ?";
  db.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao verificar email" });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ error: "Este email já está cadastrado!"});
      return;
    }

    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    db.query(sql, [nome, email, senha], (err) => {
      if (err) {
        res.status(500).json({ error: "Erro ao cadastrar usuário" });
        return;
      }
      res.json({ message: "Usuário cadastrado com sucesso!" });
    });
  });
});

app.get("/register", (req, res) => {
  res.send("Página de cadastro");
});

app.post("/registeremployee", (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!nome || !email || !telefone) {
    return res.status(400).json({ 
      mensagem: "Preencha todos os campos!" 
    });
  }

  const sql = "INSERT INTO funcionarios (nome, email, telefone) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, telefone], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar funcionário:", err);
      return res.status(500).json({ mensagem: "Erro ao cadastrar funcionário" });
    }

    enviarEmail(nome, email);

    res.json({ mensagem: "Funcionário cadastrado com sucesso!" });
  });
});

app.get("/registeremployee", (req, res) => {
  const sql = "SELECT * FROM funcionarios";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao buscar funcionários:", err);
      return res.status(500).json({ mensagem: "Erro ao buscar funcionários" });
    }
    res.json(results);
  });
});

const enviarEmail = (nome, emailCandidato) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sistemassiscobra@gmail.com",
      pass: "zsejufccfhqypwys",
    },
  });

  const mailOptions = {
    from: "sistemassiscobra@gmail.com",
    to: emailCandidato,
    subject: "Candidatura realizada!",
    text: `Caro ${nome} , sua candidatura foi feito com sucesso, aguarde o retorno da empresa.`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Erro ao enviar e-mail:", err);
    } else {
      console.log("E-mail enviado com sucesso:", info.response);
    }
  });
};

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
