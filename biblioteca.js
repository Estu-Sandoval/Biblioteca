export class Biblioteca {
  #nombre;
  #libros;
  #socios;
  #empleados;
  #prestados;
  #devueltos;

  /**
   * Crea una instancia de la clase Biblioteca.
   * @param {string} nombre - Indica el nombre de la biblioteca.
   */
  constructor(nombre) {
    this.#nombre = nombre;
    this.#libros = [];
    this.#prestados = [];
    this.#devueltos = [];
    this.#socios = [];
    this.#empleados = [];
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
   * @param {string} titulo - Título del libro a prestar.
   */
  lendBook(titulo) {
    let libroEncontrado = this.#libros.find((libro) => libro.titulo === titulo);

    if (libroEncontrado) {
      alert(`El libro "${libroEncontrado.titulo}" fue prestado con éxito"`);
      this.#libros.splice(this.#libros.indexOf(libroEncontrado), 1);
      this.#prestados.push(libroEncontrado);
    } else {
      alert(`El libro "${titulo}" no se encuentra`);
    }
  }

  /**
   * Devuelve un libro que haya sido prestado.
   * @param {string} titulo - Título del libro a devolver.
   */
  returnBook(titulo) {
    let libroEncontrado = this.#prestados.find(
      (libro) => libro.titulo == titulo
    );

    if (libroEncontrado) {
      alert(`El libro "${libroEncontrado.titulo}" fue devuelto con éxito"`);
      this.#prestados.splice(libroEncontrado, 1);
      this.#libros.push(libroEncontrado);
      this.#devueltos.push(libroEncontrado);
    } else {
      alert(
        `El libro "${titulo}" no se puede devolver porque no se encuentra entre los libros prestados`
      );
    }
  }

  get libros() {
    return this.#libros;
  }

  get prestados() {
    return this.#prestados;
  }

  get devueltos() {
    return this.#devueltos;
  }
}
