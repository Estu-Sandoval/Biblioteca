export class Libro {
    #titulo; #autor; #genero; #editorial; #ISBN; #cant_paginas;
    constructor(titulo, autor, genero, editorial, ISBN, cant_paginas) {
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

