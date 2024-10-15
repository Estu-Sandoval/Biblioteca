import { Libro } from "./libro.js";
import { Biblioteca } from "./biblioteca.js";

const miBiblioteca = new Biblioteca("Rivadavia");

miBiblioteca.addNewBook(
  new Libro("Harry Potter y La Piedra Filosofal", "J.K Rowling", "Ciencia Ficción","Ni Idea","6895356658",1450)
);

miBiblioteca.addNewBook(
    new Libro("The Twiglights", "Stephenie Meyer", "Fantasía y Romance","Santillana","5668686635",2354)
  );

miBiblioteca.addNewBook(
    new Libro("El principito", "Antoine Saint-Exupery", "Fantasía","Santillana","546324565",200)
  );

miBiblioteca.addNewBook(
    new Libro("Don Quijote De La Mancha", "Miguel De Cervantes", "Literario","Santillana","7335556563",1675)
);



