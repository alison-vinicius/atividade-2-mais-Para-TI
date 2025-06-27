const produtos = [
  { nome: "Mouse", preco: 30 },
  { nome: "Teclado", preco: 50 },
  { nome: "Monitor", preco: 1600 },
  { nome: "Pen Drive", preco: 24 }
]

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome)
}
console.log(nomesOrdenadosPorPreco(produtos))


