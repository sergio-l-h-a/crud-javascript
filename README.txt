📘 CRUD de Usuários — JavaScript, Node.js, Express e MySQL
Este projeto é um CRUD completo de usuários, desenvolvido com JavaScript puro no frontend e Node.js + Express + MySQL no backend.
Permite cadastrar, listar, editar e excluir usuários de forma simples e eficiente.

🚀 Tecnologias Utilizadas
Frontend
HTML5

CSS3

JavaScript (Fetch API)

Backend
Node.js

Express

MySQL2 (Promise)

Dotenv

CORS

Banco de Dados
MySQL

📂 Estrutura do Projeto
Código
crud-usuario/
│
├── backend/
│   ├── controllers/
│   │   └── usuariosController.js
│   ├── database/
│   │   └── db.js
│   ├── routes/
│   │   └── usuariosRoutes.js
│   ├── .env
│   ├── .gitignore
│   └── server.js
│
└── frontend/
    ├── index.html
    ├── script.js
    └── styles.css
⚙️ Configuração do Backend
1️⃣ Instale as dependências
bash
npm install
2️⃣ Configure o arquivo .env
Crie um arquivo .env dentro da pasta backend:

Código
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_DATABASE=cadastro_usuario
3️⃣ Inicie o servidor
bash
node server.js
O servidor iniciará em:

Código
http://localhost:3000
🗄️ Estrutura da Tabela no MySQL
Execute no MySQL:

sql
CREATE DATABASE cadastro_usuario;

USE cadastro_usuario;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL
);
🔄 Rotas da API
Método	Rota	Descrição
GET	/usuarios	Lista todos os usuários
POST	/usuarios	Cadastra um novo usuário
PUT	/usuarios/:id	Atualiza um usuário existente
DELETE	/usuarios/:id	Remove um usuário
🖥️ Funcionalidades do Frontend
Formulário para cadastrar usuários

Tabela dinâmica com listagem

Botões de Editar e Excluir

Atualização automática após cada ação

Comunicação com o backend via Fetch API

📸 Captura de Tela
(Adicione aqui a imagem do seu CRUD depois que subir no GitHub)

📌 Objetivo do Projeto
Este projeto foi desenvolvido com foco em aprendizado, praticando:

Integração frontend ↔ backend

Consumo de API REST

Manipulação de banco de dados

Organização de código com MVC simples

Uso de variáveis de ambiente

🧑‍💻 Autor
Francisco Sérgio  
Projeto criado para estudo e prática de desenvolvimento web.