let libro = {
    Titulo: "Halo",
    Autor: "Eric Nylund",
    Año: 2001,
}
console.log(libro);

let cambiarAño = libro.Año = 2002;
console.log({cambiarAño});

let agregarDisponibilidad = libro.Disponible = true;
console.log(libro);

console.log("Título:", libro.Titulo);
console.log("Autor:", libro.Autor);
console.log("Año:", libro.Año);
console.log("Disponible:", libro.Disponible);


