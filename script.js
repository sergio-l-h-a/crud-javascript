const API = "http://localhost:3000/usuarios";

// LISTAR
async function listar() {
    const res = await fetch(API);
    const usuarios = await res.json();

    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    usuarios.forEach(u => {
        tabela.innerHTML += `
            <tr>
                <td>${u.id}</td>
                <td>${u.nome}</td>
                <td>${u.email}</td>
                <td>
                    <button onclick="editar(${u.id})">Editar</button>
                    <button onclick="deletar(${u.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

// CADASTRAR
document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
    });

    listar();
});

// EDITAR
async function editar(id) {
    const nome = prompt("Novo nome:");
    const email = prompt("Novo email:");

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
    });

    listar();
}

// DELETAR
async function deletar(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    listar();
}

listar();
