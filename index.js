// console.log("Hello World")

//generar una variable con valor de 1
//y mediante una funcion o estructura de control 
// hacer que se sume de 1 en 1 hasta 10

// let number = 1;

// for(let i = 0; i < 10; i++){
//     const suma = number++
//     console.log(suma)
// }

// const a = "Hello"

// a = "hola" //Assignment to constant variable.

// const variableConst = [1,2,3,4]
// const variableObjet = {name: "mariano"}

// console.log(Array.isArray(variableConst))
// console.log(Array.isArray(variableObjet))

// console.log(2**2)

// const array1 = [1,2,3]

// const initialValue = 0;

// const sum = array1.reduce(
//     (acumulador, currenteValue) => acumulador + currenteValue,
//     initialValue
//     )
//     console.log(sum)

// const obj1 = {
//     prop1: "mariano",
//     prop2: "juan"
// }
// const obj2 = {
//     prop1: "lucas",
//     prop2: "marcos"
// }

// let {prop1} = obj1

// let obj3 = {...obj1}

// console.log(prop1)
// console.log(obj1)
// console.log(obj3)
//imprimir una lista que tenga solo los nombres
// const objetos =  [
//     {
//      manzanas:3,
//      peras:2,
//      carne:1,
//      jugos:5,
//      dulces:2
//     },
//     {
//      manzanas:1,
//      sandias:1,
//      huevos:6,
//      jugos:1,
//      panes:4
//     }
//    ]

//    const nuevoArray = []

//    objetos.forEach((obj) => {
//     const keys = Object.keys(obj)
//     keys.forEach((key)=>{
//         if(!nuevoArray.includes(key)) nuevoArray.push(key)
//         console.log(key)
//     })
//    })

//    console.log(nuevoArray)
const productos = [
    {
      nombre: "Camisa",
      precio: 25.99,
      descripcion: "Camisa de algodón para hombre",
      imagen: "https://example.com/camisa.jpg"
    },
    {
      nombre: "Pantalón",
      precio: 39.99,
      descripcion: "Pantalón de mezclilla para mujer",
      imagen: "https://example.com/pantalon.jpg"
    },
    {
      nombre: "Zapatos",
      precio: 59.99,
      descripcion: "Zapatos de cuero para hombre",
      imagen: "https://example.com/zapatos.jpg"
    }
  ];

  const precios = []

  productos.forEach(prod=>{
    const precio = prod.precio
    precios.push(precio)
  })

//   console.log(precios)

  const sum = precios.reduce((acumulador, currentValue) => acumulador + currentValue,0)

// console.log("El valor total de los precios es: "+ sum)


const numeros = [1,2,3]

const sumaToNumbers = numeros.reduce((acumulador, currentValue)=> acumulador + currentValue, 1)
// console.log(sumaToNumbers)

const saludo = "hello from brasil"

// console.log(saludo.trim())


class TicketsManager{
    #precioBaseGanancias = 0.15
    constructor(){
        this.eventos = []
    }

    retutnEventos(){
        return this.eventos
    }

    agregarEventos(nombre, lugar, precio, capacidad=50, fehcha= new Date().toLocaleDateString()){
        const evento = {
            nombre, lugar, precio: precio + precio*this.#precioBaseGanancias, capacidad, fehcha, participantes: []
        }
        if(this.eventos.length === 0){
            evento.id = 1
        }else{
            evento.id = this.eventos[this.eventos.length-1].id + 1
        }
        this.eventos.push(evento)
    }
    agregarUsuarios(idUsuario, idEvento){
        const eventoIndex = this.eventos.findIndex(evento=> evento.id === idEvento)
        if(eventoIndex === -1){
            console.log("evento no existe")
        }
        this.eventos[eventoIndex].participantes.push(idUsuario)
    }   
}

const manejadorDeEventos = new TicketsManager();
manejadorDeEventos.agregarEventos("event 1", "argentina", 5, 50)
manejadorDeEventos.agregarUsuarios(100, 1)
console.log(manejadorDeEventos.retutnEventos())