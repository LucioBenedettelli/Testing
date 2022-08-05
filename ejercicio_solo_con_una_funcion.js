let newArray = []
let valor = 0
let operacion = ""
let resultado = 0
let nuevaOperacion = false

class Moneda {
    constructor(valor, operacion) {
        this.valor = valor
        this.operacion = operacion
        this.resultado = resultado
    }
   
    
}


function cambiarMoneda(valorMoneda) {
    let mostrarResultado = valor / valorMoneda
    return mostrarResultado
}

do {
    valor = prompt("Ingrese el valor expresado en pesos argentinos")
    operacion = prompt("¿A que moneda desea convertirlo? Dolares (USD), Libras (LIB), Euros (EUR) y Reales (R)")
    switch (operacion.toUpperCase()) {
        case "USD":
            resultado = cambiarMoneda(260).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "dolares")
            let dolares = new Moneda(valor, operacion, resultado)
            newArray.push(dolares)
            break;
        case "EUR":
            resultado = cambiarMoneda(280).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "euros")
            let euros = new Moneda(valor, operacion, resultado)
            newArray.push(euros)
            break;
        case "LIB":
            resultado = cambiarMoneda(275).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "libras")
            let libras = new Moneda(valor, operacion, resultado)
            newArray.push(libras)
            break;
        case "R":
            resultado = cambiarMoneda(50).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "reales")
            let reales = new Moneda(valor, operacion, resultado)
            newArray.push(reales)
            break;
        default:
            alert("No elegiste la operacion correcta")
            valor = 0
            operacion = ""
            break;
    }
    nuevaOperacion = confirm("Quieres realizar otra operacion?")
} while (nuevaOperacion)



newArray.map(element => {
    document.write(`Has convertido ${element.valor} de pesos a ${element.resultado} ${element.operacion} <br>`)
    console.log(element.operacion)
});

console.log(newArray)
