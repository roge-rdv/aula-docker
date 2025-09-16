const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

app.use(express.json());

const PORT = 3001;

// Configuração do MySQL (igual ao docker-compose)
const dbConfig = {
  host: "mysql",       // nome do serviço no docker-compose
  user: "appuser",
  password: "apppass",
  database: "appdb"
};

app.get("/", (req, res) => {
  //res.json({ message: "Node.js está rodando no Docker!" });
  res.send("<h1>Hello Word</h1>")
});

app.get("/api/v1/cliente", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT * FROM clientes");
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/v1/cliente/:id", async (req, res) => {
  try { 

    const cliente = req.params.id;

    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT * FROM clientes where id = ?", [cliente]);
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/v1/cliente/", async (req, res) => {
  try {
    const cliente = req.body;

    if (!cliente.email || !cliente.nome || !cliente.telefone) {
      return res.status(400).json({ error: "Faltou algum parâmetro: email, nome e telefone são obrigatórios." });
    }

    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute("INSERT INTO clientes (email, telefone, nome) VALUES (?, ?, ?)", [cliente.email, cliente.telefone, cliente.nome]);
    await connection.end();

    res.status(201).json({
      message: "Cliente criado com sucesso!",
      affectedRows: result.affectedRows,
      insertId: result.insertId
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/v1/cliente/:id", async (req, res) => {
  try {
    const clienteId = req.params.id;

    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("DELETE FROM clientes WHERE id = ?", [clienteId]);
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Node rodando na porta ${PORT}`);
});
