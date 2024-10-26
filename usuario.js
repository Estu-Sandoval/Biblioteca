import { Libro } from "./libro.js";

export default class Usuario{
    #nombre_usuario;#password; #libros;#rol;


    /**
     * Crea una instancia de la clase Usuario
     * @param {string} nombre_usu Nombre de usuario
     * @param {string} password Contraseña del usuario
     * @param {string} rol Rol del usuario (admin/user)
     */
    constructor(nombre_usu,password,rol){
        this.#nombre_usuario = nombre_usu;
        this.#password = password;
        this.#rol = rol;
        this.#libros = [];
    }

    /**
     * Agrega un libro a los libros prestados del usuario
     * @param {Libro} libro 
     */
    agregaLibro(libro){
        this.#libros.push(libro);
    }

    get libros(){
        return this.#libros;
    }

    get nombre_usuario(){
        return this.#nombre_usuario;
    }

    get password(){
        return this.#password;
    }

    get rol(){
        return this.#rol;
    }

    set password(new_password){
        this.#password = new_password;
    }
}