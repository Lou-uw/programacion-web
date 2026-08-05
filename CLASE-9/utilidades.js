// EJERCICIO 6 - IMPORT/EXPORT

export function formatearPrecio(precio) {
 return "$" + precio.toLocaleString("es-AR");

}
export function calcularDescuento(precio,porcentaje) {
 const descuento = (precio * porcentaje) / 100;
 return precio - descuento;
}

export function estaDiponible(stock){
 return stock > 0 ? true : false
}
