import mysql from "mysql2";
import 'dotenv/config'

const data_base = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

data_base.connect(err => {
  if (err) console.log("MySQL\nStatus: Erro ao conectar");
  else console.log("MySQL\nStatus: Conectado");
});

export default data_base;
