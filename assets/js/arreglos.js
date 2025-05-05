let peliculas = [
    "Transformers",
    "Avatar",
    "Avengers",
    "Harry Potter",
    "Star Wars",
]

console.log(peliculas);

peliculas.unshift("Titanic");
console.log(peliculas);

peliculas.pop();
console.log(peliculas);

peliculas.forEach((pelicula, index) => {
    console.log((index + 1) + " - " + pelicula);
});

let posicion = peliculas.indexOf("Harry Potter");
console.log(posicion);
