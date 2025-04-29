import mysql from "mysql2";
import 'dotenv/config'

const data_base = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

data_base.connect(err => {
  if (err) console.log("Erro ao conectar ao MySQL");
  else console.log("Conectado ao MySQL!");
});

export default data_base;
