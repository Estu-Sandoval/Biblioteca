export default class Usuario{
    #nombre_usuario;#password; #libros;
    constructor(nombre_usu,password){
        this.#nombre_usuario = nombre_usu;
        this.#password = password;
        this.#libros = [];
    }

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

    set password(new_password){
        this.#password = new_password;
    }
}