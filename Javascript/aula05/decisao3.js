let gostpDoSesc = false
let gostoDeCachoeira = true

// || significa OU, ou seja, se eu gostar de cachoeira e não gostar de SESC, tanto faz. Contanto que um ou outro seja verdade, o código vai rodar.

if (gostpDoSesc == false || gostoDeCachoeira == true) {
    console.log("vou viver!");
} else {
    console.log("vou ficar em casa então");
}