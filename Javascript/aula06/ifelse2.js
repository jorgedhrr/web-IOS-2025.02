let Idade = 24
let temDinheiro = false
let temCadUnico = true


// > maior que
// >= maior ou igual a
// < menor que
// <= menor ou igual a

if (Idade >= 18) {

    if (temDinheiro == true) {
        console.log("Vamos pagar o quebra!");

    } else {
        if (temCadUnico == true) {
            console.log("CNH de Graça!");

        }
        else {
            console.log("Pobrinho e sem cadastro.");
        }
    }

} else {
    console.log("Muito novo para pilotar!");
}