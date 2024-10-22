export class Libro {
  #titulo;
  #autor;
  #genero;
  #editorial;
  #ISBN;
  #cant_paginas;
  #id;
  static #instance = 0;

  /**
   * Crea una instancia de la clase Libro.
   * @param {string} titulo - Título del libro.
   * @param {string} autor - Autor del libro.
   * @param {string} genero - Genero del libro.
   * @param {string} editorial - Editorial del libro.
   * @param {string} ISBN - ISBN del libro.
   * @param {number} cant_paginas - Cantidad de páginas del libro.
   */
  constructor(titulo, autor, genero, editorial, ISBN, cant_paginas) {
    this.#id = ++Libro.#instance;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#genero = genero;
    this.#editorial = editorial;
    this.#ISBN = ISBN;
    this.#cant_paginas = cant_paginas;
  }

  // Getters
  get titulo() {
    return this.#titulo;
  }

  get autor() {
    return this.#autor;
  }

  get genero() {
    return this.#genero;
  }

  get editorial() {
    return this.#editorial;
  }

  get ISBN() {
    return this.#ISBN;
  }

  get cant_paginas() {
    return this.#cant_paginas;
  }

  get id() {
    return this.#id;
  }

  // Setters
  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }

  set genero(nuevoGenero) {
    this.#genero = nuevoGenero;
  }

  set editorial(nuevaEditorial) {
    this.#editorial = nuevaEditorial;
  }

  set ISBN(nuevoISBN) {
    this.#ISBN = nuevoISBN;
  }

  set cant_paginas(nuevaCantPaginas) {
    this.#cant_paginas = nuevaCantPaginas;
  }
}

/*         this.#ejemplares_disponibles = 5; */

/* set ejemplares_disponibles(cant_ejemplares_disp) {
    this.#ejemplares_disponibles = cant_ejemplares_disp;
} */

/*     get ejemplares_disponibles() {
        return this.#ejemplares_disponibles;
    } */
