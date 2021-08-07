//Como eliminar espacio en blanco de un string

const saludo = "          Hello friend!           ";

console.log(saludo);
console.log(saludo.length);

//Eliminar el espacio del inicio...
console.log(saludo.trimStart());
//Eliminar el espacio al final...
console.log(saludo.trimEnd());

//Podemos encadenar los metodos para eliminar ambos
console.log(saludo.trimStart().trimEnd());

//Tambien esta este metodo que elimina ambos espacios
console.log(saludo.trim());
