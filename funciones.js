let arrayNuevo = []

class Datos {
    constructor(nombre, apellido, DNI) {
     this.nombre = nombre 
     this.apellido = apellido 
     this.DNI = DNI
    }
}

let nombre = new Datos("Carlos", "Suarez", 20180190)
let nombre2 = new Datos("Lucio", "Gomez", 10180190)
arrayNuevo.push(nombre)
arrayNuevo.push(nombre2)
console.log(arrayNuevo)

