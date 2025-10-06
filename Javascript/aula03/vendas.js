let doce = "Brigadeiro"
let usuario = "João Victor"
let precoDoce = 5.50

console.log(doce);
console.log(usuario);
console.log(doce + usuario);

console.log("Olá," + usuario + "!");
console.log ("Entre festas de criança e aquela necessidade pós almoço, um " + doce + " sempre cai bem!" );
//sempre adicionar espaço antes e após a barra
// Quando quero conectar duas frases/strings, posso usar o sinal de mais dentro do console.log
console.log(usuario + ": Quero 3 " + doce + "s, por favor! ");
console.log( usuario + "Certo, seu pedido ficou " + (precoDoce *3).toFixed (2) );

// .tofixed abre o parenteses pra colocar a quantia de algarismos

// o ato de conectar ou colar dados se chama concatenar