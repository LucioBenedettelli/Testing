let valor = 0
let operacion = "";
let dolar = 200
let euro = 244
let libra = 264
let real = 51
let resultado = 0;
let nuevaOperacion = false;

function cambiarMoneda (valorMoneda) {
    let mostrarResultado = valor / valorMoneda
    return mostrarResultado;
      
  }
  
  let mostrarResultado = cambiarMoneda(euro)
  console.log(mostrarResultado)

function elegirMoneda () {
    switch (operacion){ 
        case "USD":
           resultado = cambiarMoneda(dolar).toFixed(2)
           alert("Te quedarán" + " " + resultado + " " + "dolares")
            break;
        case "EUR":
            resultado = cambiarMoneda(euro).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "euros")
            break;
        case "LIB":
            resultado = cambiarMoneda(libra).toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "libras")
            break;
        case "R":
           resultado = cambiarMoneda(real).toFixed(2)
           alert("Te quedarán" + " " + resultado + " " + "reales")
            break;
        default:
            alert ("No elegiste una operación correcta");
            valor = 0;
            operacion = "";
            break;
    } 
}

function configuracionMonedas() {
do {
    valor = Number(prompt ("Ingrese un valor expresado en pesos argentinos: "));
    operacion = prompt (" ¿A que moneda desea convertirlo? Dolares (USD) , Euros (EUR), Libras (LIB) o Reales (R)");
    elegirMoneda()
    nuevaOperacion = confirm ("¿Añadir otra operación o terminar?")
} while (nuevaOperacion);
}

configuracionMonedas()