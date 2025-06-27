function paresParaObjeto(pares) {
  return Object.fromEntries(pares)
}

const pares = [["nome", "Ana"], ["idade", 25], ["cidade", "São Paulo"]]
console.log(paresParaObjeto(pares))


function objetoParaPares(obj) {
  return Object.entries(obj)
}

const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" }
console.log(objetoParaPares(pessoa))

