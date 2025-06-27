function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    
    clearTimeout(timeoutId)

    // Agenda a nova execução
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}


function salvarBusca(termo) {
  console.log("Salvando busca por:", termo)
}


const buscaComDebounce = debounce(salvarBusca, 1000)

buscaComDebounce("Ali");
buscaComDebounce("Vini");
buscaComDebounce("santos");