const prompt = require('prompt-sync')();
function gerarNumeroAleatorio(){
    let numeroInteiro = Math.floor(Math.random() * 100) + 1;
    return numeroInteiro
}


console.log("============================")
console.log("     JOGO DA ADVINHAÇÃO     ")
console.log("============================")

let numeroSorteado = gerarNumeroAleatorio()
let tentativa
let tentativas = 0
while(tentativa != numeroSorteado){
    tentativa = prompt("Adivinhe o numero:")
    if(tentativa > numeroSorteado){
        console.log("o numero secreto é menor")
    } else if(tentativa < numeroSorteado){
        console.log("o numero secreto é maior")
    }
    tentativas++
}

console.log(`Parabéns você acertou o numero em ${tentativas} tentativas`)


