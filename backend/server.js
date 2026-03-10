const express = require("express");
const cors = require("cors");
const app = express();
const usuariosRoutes = require("./routes/usuariosRoutes");

app.use(cors());
app.use(express.json());
app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));