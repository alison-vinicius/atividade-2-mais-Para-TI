const meses= {
    '1': 31,
    '2': 29,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31,
}

function ehDataValida(dia, mes, ano){
    mes.toString()
    if( (dia > 0 && dia <= meses[mes]) && (mes > 0 && mes <= 12) && (ano > 0)){
        if(mes == '2' && dia == 29){
           if (!((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0))){
                return false 
            }
        }

        return true

    } else{
        return false
    }

}

let dia = 29
let mes = 2
let ano = 2025

const valida = ehDataValida(dia, mes, ano)
if(valida){
    console.log("data válida")
} else{
    console.log("data invalida")
}

