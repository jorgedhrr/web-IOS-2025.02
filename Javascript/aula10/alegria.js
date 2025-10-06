let login = prompt("Insira seu usuário de acesso:")
let senha = prompt("Insira sua senha:")
let loginCerto = "jorgedhrr"
let senhaCerta = "Suporte@12345"

// enquanto a senha que o usuario inserir for diferente da senha certa continuaremos pedindo para que coloque a senha novamente.

//do = faça e while = enquanto. O que da nome a estrutura do while, ou seja, faça enquanto.

do {
    login = prompt("Insira seu e-mail:")
} while (login != loginCerto);

do {
    senha = prompt("Insira sua senha:")
} while (senha != senhaCerta);

// peça a senha apenas 1 vez, caso o usuário nçao coloque a senha certa, repita o pedido.
