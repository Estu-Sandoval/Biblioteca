import Usuario from "./usuario.js";

export class Biblioteca {
  #nombre;
  #libros;

  /**
   * Crea una instancia de la clase Biblioteca.
   * @param {string} nombre - Indica el nombre de la biblioteca.
   */
  constructor(nombre) {
    this.#nombre = nombre;
    this.#libros = [];
  }

  /**
   * Agrega un nuevo libro a la colección de libros.
   * @param {Libro} book - Libro que se agregara a la colección de libros de la biblioteca.
   */
  addNewBook(book) {
    this.#libros.push(book);
  }

  /**
   * Presta un libro si este se encuentra disponible.
   * @param {number} id - Id del libro a prestar.
   * @param {Usuario} usuario - Usuario al que se le va a prestar el libro.
   * @returns {Libro}
   */
  lendBook(id,usuario) {
    let libroEncontrado = this.#libros.find((libro) => libro.id === id);

    if (libroEncontrado) {
      alert(`El libro "${libroEncontrado.titulo}" fue prestado con éxito"`);
      this.#libros.splice(this.#libros.indexOf(libroEncontrado), 1);
      usuario.agregaLibro(libroEncontrado);
      return libroEncontrado;
    } else {
      alert(`El libro "${id}" no se encuentra`);
    }
  }

  /**
   * Devuelve un libro que haya sido prestado.
   * @param {number} id - Id del libro a devolver.
   * @param {Usuario} usuario - Usuario que va a devolver el libro.
   * @returns {Libro}
   */
  returnBook(id,usuario) {
    let libroEncontrado = usuario.libros.find(
      (libro) => libro.id === id
    );

    if (libroEncontrado) {
      alert(`El libro "${libroEncontrado.titulo}" fue devuelto con éxito"`);
      usuario.libros.splice(usuario.libros.indexOf(libroEncontrado), 1);
      this.#libros.push(libroEncontrado);
      return libroEncontrado;
    } else {
      alert(`El libro "${id}" no se puede devolver porque no se encuentra entre los libros prestados`);
    }
  }

  get libros() {
    return this.#libros;
  }
}
