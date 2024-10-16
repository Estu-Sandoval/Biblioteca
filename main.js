import { Libro } from "./libro.js";
import { Biblioteca } from "./biblioteca.js";

const miBiblioteca = new Biblioteca("Rivadavia");

miBiblioteca.addNewBook(
  new Libro("Harry Potter y La Piedra Filosofal", "J.K Rowling", "Ciencia Ficción","Salamandra S.A.","9789878000107",256)
);

miBiblioteca.addNewBook(
    new Libro("Twilight", "Stephenie Meyer", "Fantasía y Romance","Alfaguara","9780316038379",512)
  );

miBiblioteca.addNewBook(
    new Libro("El principito", "Antoine Saint-Exupery", "Fantasía","Reynal","9789876373487",120)
  );

miBiblioteca.addNewBook(
    new Libro("Don Quijote De La Mancha", "Miguel De Cervantes", "Literario","Juan De La Cuesta","9788467016901",920)
);