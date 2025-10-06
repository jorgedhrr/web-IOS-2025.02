let login = prompt("Insira seu usuário de acesso:")
let senha = prompt("Insira sua senha:")
let loginCerto = "jorgedhrr"
let senhaCerta = "Suporte@12345"

//Validar se o usuário e a senha estão certas
if (login == loginCerto && senha == senhaCerta) {

    alert("Credencial Validada")

    alert ("Opção 1 : Crédito \n Opção 2: Consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n Opção 0: Falar com o atendente")

let opcao = Number (prompt("Escolha a opção:"))

switch (opcao) {
   
    case 1:
       alert ("Você selecionou Crédito.\nVocê está sendo direcionado ao setor desejado.") 
        break;

    case 2:
       alert ("Você selecionou Crédito Consignado.\nVocê está sendo direcionado ao setor desejado.") 
        break;

    case 3:
       alert ("Você selecionou Empréstimo.\nVocê está sendo direcionado ao setor desejado.") 
        break;

    case 4:
       alert ("Você selecionou Renegociar.\nVocê está sendo direcionado ao setor desejado.") 
        break;

    case 0:
       alert ("Você optou por falar com o atendente \nSeu atendimento está sendo transferido a um de nossos colaboradores.") 
        break;

        
    default:
        break;
}

}
else {
    alert("Login ou senha incorretos!")
}