function memoize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const resultado = fn.apply(this, args)
    cache.set(key, resultado)
    return resultado
  }
}

function fatorial(n) {
  if (n < 0) throw new Error("Negativo não permitido")
  if (n === 0) return 1
  return n * fatorial(n - 1)
}

const fatorialMemo = memoize(fatorial)

console.log(fatorialMemo(5))
console.log(fatorialMemo(5))
console.log(fatorialMemo(6)) 
