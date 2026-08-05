//EJERCICIO 1 - TERNARIO 

//OBJETO 
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" }; 

//consigna 1 
const acceso = usuario.edad > 18 ? "Permitido" : "Denegado"; 

//consigna 2 
const plan = usuario.suscripcion == "premium" ? "Premium" : "Gratuito"; 

//consigna 3 
const saludo = usuario.nombre != "" ? `Hola ${usuario.nombre}` : "Hola, invitado"; 

console.log(acceso) 
console.log(plan) 
console.log(saludo) 

//EJERCICIO 2 - Short-circuit 

//OBJETO 
const config = { 
tema: "oscuro", 
idioma: "", 
notificaciones: true, 
usuarioAdmin: false 
}; 
 
//consigna 1 
const idioma = config.idioma || "español"; 
console.log(idioma) 
//consigna 2 
const badge = config.usuarioAdmin && "Admin"; 
console.log(badge) 
//consigna 3 
const notis = config.notificaciones && "Notificaciones activas"; 
console.log(notis) 


//EJERCICIO 3 - DESTRUCTURING DE OBJETOS 

const pelicula = { 
titulo: "Interstellar", 
director: "Christopher Nolan", 
año: 2014, 
duracion: 169, 
genero: "Ciencia ficción" 
}; 

//consigna 1 
const {titulo, director, año } = pelicula; 
//consigna 2 
const {duracion: duracionMinutos} = pelicula; 
//consigna 3 
const {calificacion = "Sin calificar"} = pelicula; 
//consigna 4 
function mostrarPelicula({titulo, año, director}) { 
 console.log(`${titulo} (${año}) - Dir. ${director}`)  
} 
console.log(titulo);
console.log(director);
console.log(año);
console.log(duracionMinutos);
console.log(calificacion);
mostrarPelicula(pelicula);

//EJERCICIO 4 - DESTRUCTURING DE ARRAYS 

const coordenadas = [40.7128, -74.0060, 10]; 
const colores = ["rojo", "verde", "azul", "amarillo"]; 

//CONSIGNA 1  
const [latitud, longitud, altitud] = coordenadas; 
//CONSIGNA 2 
const [primero, , ,cuarto] = colores; 
//CONSIGNA 3 
const [primerColor, ...resto] = colores; 

console.log(latitud);
console.log(longitud);
console.log(altitud);

console.log(primero);
console.log(cuarto);

console.log(primerColor, resto);


//EJERCICIO 5 - SPREAD 
const base = { 
marca: "Samsung", 
modelo: "Galaxy S24",  
precio: 180000 }; 

const descuento = {  
precio: 150000, 
enOferta: true }; 
 
//consigna 1 
const copia = {...base};
//consigna 2
const oferta = {
    ...base,
    enOferta: true,
    precio: 150000
};
//consigna 3
const combinado = {...base, ...descuento};
//consigna 4
const carrito = ["auriculares", "teclado"]
const carritoActualizado = [
    ...carrito
    , "mouse"
]

console.log(copia);
console.log(oferta);
console.log(combinado);
console.log(carrito);
console.log(carritoActualizado);

//EJERCICIO 7 - INTEGRADOR

const equipo = [
  { id: 1, nombre: "Ana",   rol: "desarrolladora", activo: true,  salario: 95000 },
  { id: 2, nombre: "Luis",  rol: "diseñador",       activo: false, salario: 80000 },
  { id: 3, nombre: "Carla", rol: "desarrolladora",  activo: true,  salario: 102000 },
  { id: 4, nombre: "Pedro", rol: "qa",              activo: true,  salario: 75000 },
  { id: 5, nombre: "Marta", rol: "desarrolladora",  activo: false, salario: 98000 },
];

//consigna 1
function presentar({nombre, rol}) {
    return `${nombre} - ${rol}`;
}
//consigna 2
const estados = equipo.map((persona) =>{
    return {
        nombre: persona.nombre,
        estado: persona.activo ? "Activo" : "Inactivo"
    }
  });
console.log(estados);
//consigna 3
const desarrolladorasConBono = equipo
.filter((persona) => 
     persona.rol === "desarrolladora" && persona.activo)
  .map((persona) => ({
    ...persona,
    salarioConBono: persona.salario + 10000
}));
console.log(desarrolladorasConBono);
//consigna 4
function obtenerRol(persona) {
    return (persona.nombre === "Ana" && "ADMIN") ||
           (persona.activo && persona.rol.toUpperCase()) ||
           "Inactivo";
}
console.log(obtenerRol(persona3));

