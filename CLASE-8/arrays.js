const productos = [
  { id: 1, nombre: "Auriculares Bluetooth",  categoria: "Electrónica", precio: 15000, stock: 8,  activo: true  },
  { id: 2, nombre: "Teclado Mecánico",       categoria: "Electrónica", precio: 22000, stock: 0,  activo: true  },
  { id: 3, nombre: "Silla Ergonómica",       categoria: "Muebles",     precio: 85000, stock: 3,  activo: true  },
  { id: 4, nombre: "Lámpara de Escritorio",  categoria: "Muebles",     precio: 9500,  stock: 12, activo: false },
  { id: 5, nombre: "Mouse Inalámbrico",      categoria: "Electrónica", precio: 7800,  stock: 20, activo: true  },
  { id: 6, nombre: "Monitor 27\"",           categoria: "Electrónica", precio: 120000,stock: 2,  activo: true  },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles",     precio: 4200,  stock: 0,  activo: false },
  { id: 8, nombre: "Webcam HD",              categoria: "Electrónica", precio: 18000, stock: 5,  activo: true  },
];

// EJERCICIO 1 -- Creá un array soloNombres que tenga solo los nombres de todos los productos.
const soloNombres = productos.map((producto) => {
  return producto.nombre
})
console.log(soloNombres);

//EJERCICIO 2 -- Creá un array preciosConIVA donde cada elemento sea un objeto con nombre
// y precioFinal (el precio original multiplicado por 1.21, redondeado con Math.round()).
const preciosConIVA =  productos.map((producto) => {
  return {
    nombre:producto.nombre,
    precioFinal: Math.round(producto.precio * 1.21)
  }
})
console.log(preciosConIVA);

//EJERCICIO 3 -- Creá un array con los nombres de todos los productos de la categoría "Muebles".
const soloMuebles = productos
         .filter(productos => productos.categoria === "Muebles")
         .map(producto => ({
          nombre: producto.nombre
         }))

console.log(soloMuebles);

//EJERCICIO 4 -- Encontrá el producto con id === 6 y mostrá su nombre y precio en consola.
const id6 = productos.find(function(producto){
 return producto.id === 6;
});
console.log(id6.nombre, id6.precio)

//EJERCICIO 5 --Buscá un producto cuyo nombre incluya el texto "Mouse". 
// Si lo encontrás, mostrá "Encontrado: [nombre]". Si no, mostrá "No encontrado".

const resultado = productos.find(function(producto){
  return producto.nombre.includes("Mouse")
})
 if(resultado) {
  console.log(`Encontrado: ${resultado.nombre}`)
}
  else {
    console.log(`No encontrado`)
  }
//EJERCICIO 6 -- Respondé estas preguntas con some o every, cada una en una línea:

//PRIMER PREGUNTA
const precioMayor = productos.some(function(producto){
  return producto.precio > 100000
})
console.log(precioMayor);

//SEGUNDA PREGUNTA
const definido = productos.every(function(producto){
  return producto.id != null
})
console.log(definido);

//TERCER PREGUNTA
const todosActivos = productos.some(function(producto){
  return producto.actividad === false;
})
console.log(todosActivos);

//CUARTA PREGUNTA
const cuantoStock = productos
    .filter(function(productos){
     return productos.categoria === "Electrónica"})
    .every(function(producto){
     return producto.stock > 0;
   })
console.log(cuantoStock);

//EJERCICIO 7 --Calculá el valor total del inventario: la suma de precio * stock para cada producto. 
// Solo incluí los productos con stock mayor a 0.

const valorInventario = productos
.filter(function(producto){
  return producto.stock > 0;
})
.reduce(function())
console.log(valorInventario);