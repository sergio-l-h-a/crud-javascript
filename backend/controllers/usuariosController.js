const db = require("../database/db");

// CREATE
exports.criar = async (req, res) => {
    const { nome, email } = req.body;
    await db.query("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [nome, email]);
    res.json({ mensagem: "Usuário criado!" });
};

// READ ALL
exports.listar = async (req, res) => {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
};

// READ ONE
exports.buscar = async (req, res) => {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    res.json(rows[0]);
};

// UPDATE
exports.atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    await db.query("UPDATE usuarios SET nome = ?, email = ? WHERE id = ?", [nome, email, id]);
    res.json({ mensagem: "Usuário atualizado!" });
};

// DELETE
exports.deletar = async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
    res.json({ mensagem: "Usuário deletado!" });
};












