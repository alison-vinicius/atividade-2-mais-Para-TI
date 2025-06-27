const vendas = [
  { cliente: "Ana", total: 900 },
  { cliente: "João", total: 2200 },
  { cliente: "Ana", total: 3450 },
  { cliente: "Carlos", total: 1200 },
  { cliente: "João", total: 1245 }
]

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda

    if (!acumulador[cliente]) {
      acumulador[cliente] = 0
    }

    acumulador[cliente] += total
    return acumulador
  }, {})
}

console.log(agruparPorCliente(vendas))


