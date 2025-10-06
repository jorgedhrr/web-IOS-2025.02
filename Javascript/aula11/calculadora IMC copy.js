// Abaixo do peso: Menos de 18,5
// Peso normal: 18,5 a 24,9
// Sobrepeso: 25 a 29,9
// Obesidade grau I: 30 a 34,9
// Obesidade grau II: 35 a 39,9
// Obesidade grau III: 40 ou mais

//(IMC = Peso / (Altura x Altura))

let altura = Number(prompt ("Informe sua altura"))
let peso = Number(prompt ("Informe seu peso"))
let IMC = 0

for (let IMC = 0; IMC = peso / (altura * altura); ) {

    if (IMC <= 18.5) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está abaixo do peso.");
        break;
    }
    else if (IMC >= 18.6 && IMC <= 24.9) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está com o peso normal.");
        break;
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está acima do peso.");
        break;
    }
    else if (IMC >= 30 && IMC <= 34.9) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está com obesidade de 1º grau.");
        break;
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está com obesidade de 2º grau.");
        break;
    }
    else if (IMC >= 40) {
        alert("Seu IMC é: " + IMC.toFixed(2) + " \n Você está com obesidade de 3º grau.");
        break;
    }

}



