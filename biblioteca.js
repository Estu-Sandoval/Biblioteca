export class Biblioteca{
    #nombre; #libros; #socios; #empleados;
    #prestados; #devueltos;

    constructor(nombre){
        this.#nombre = nombre;
        this.#libros = [];
        this.#prestados = [];
        this.#devueltos = [];
        this.#socios = [];
        this.#empleados = [];
    }

    // Agrega un nuevo libro a la colección de libros
    addNewBook(book){
        this.#libros.push(book)
    }

    // Presta un libro
    lendBook(titulo){
        let libroEncontrado = this.#libros.find(
            (libro,indice) => {
                libro.titulo == titulo;
                this.#libros.slice(indice,1);
            }
        )

        if(libroEncontrado){
            this.#prestados.push(libroEncontrado)
        }
        else{
            alert("El libro no se encuentra")
        }
    }

    returnBook(titulo){
        let libroEncontrado = this.#prestados.find(
            (libro,indice) => {
                libro.titulo == titulo;
                this.#prestados.slice(indice,1);
            }
        )

        if(libroEncontrado){
            this.#libros.push(libroEncontrado);
            this.#devueltos.push(libroEncontrado);
        }
        else{
            alert("El libro no se puede devolver porque no se encuetra")
        }
    }
}