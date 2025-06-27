function extrairPalavrasUnicas(frase){
    let palavras = []
    let palavra = ""

    for(let letra in frase){
        if(frase[letra] != " "){
            palavra += frase[letra]
        }else{
            if(!palavras.includes(palavra)){
                palavras.push(palavra)
            }
            palavra = ""
        }
    }
    if(!palavras.includes(palavra)){
        palavras.push(palavra)
    }
    return palavras
}

let frase = "olá olá mundo mundo vini"
let palavrasUnicas = extrairPalavrasUnicas(frase)
console.log(palavrasUnicas)


