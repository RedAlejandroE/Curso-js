//Object Literal
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Object constructor
function producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new producto("Celular", 2000);

console.log(producto2);
