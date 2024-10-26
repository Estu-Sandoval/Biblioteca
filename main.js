import { Libro } from "./libro.js";
import { Biblioteca } from "./biblioteca.js";
import { datos } from "./datos.js";

const username = localStorage.getItem("username");

const nombreUsuario = document.getElementById("usuario");
nombreUsuario.textContent = username;

const usuario = datos.find((usuario)=> usuario.nombre_usuario === username);

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

const btnNewLibro = document.getElementById("show_new");
btnNewLibro.addEventListener("click",mostrarNuevoLibro);

const btnAgregaLibro = document.getElementById("nuevo");
btnAgregaLibro.addEventListener("click",agregarLibro);

const btnLendLibro = document.getElementById("show_lend");
btnLendLibro.addEventListener("click",mostrarPrestarLibro);

const btnPrestaLibro = document.getElementById("prestar");
btnPrestaLibro.addEventListener("click",prestarLibro);

const btnReturnLibro = document.getElementById("show_return");
btnReturnLibro.addEventListener("click",mostrarDevolverLibro);

const btnDevolverLibro = document.getElementById("devolver");
btnDevolverLibro.addEventListener("click",devolverLibro);

const btnsCancelar = document.querySelectorAll(".aspaRoja");

btnsCancelar.forEach(
  boton => {
    boton.addEventListener("click",cancelar);
  }
)

if(usuario.rol==="user"){
  btnNewLibro.classList.add("oculto");
}
else{
  btnNewLibro.classList.remove("oculto");
}

const btnLogout = document.querySelector(".btn_logout");
btnLogout.addEventListener("click",cerrarSesion);

const modal = document.querySelector(".modal");
const contentMain = document.querySelector(".main_content")
const registers = document.querySelector(".registers");

function mostrarNuevoLibro(){
  modal.classList.remove("oculto");
  modal.children[0].classList.remove("oculto");
  contentMain.classList.add("deshabilitado");
}

function agregarLibro(){
  let nuevoLibro = new Libro()
  const titulo = document.getElementById("titulo");
  const autor = document.getElementById("autor");
  const genero = document.getElementById("genero");
  const editorial = document.getElementById("editorial");
  const ISBN = document.getElementById("ISBN");
  const cantPag = document.getElementById("cant_pag");
  if(titulo.value!="" && autor.value!="" && genero.value!="" && editorial.value!="" && ISBN.value!="" && cantPag.value!=""){
    nuevoLibro.titulo = titulo.value;
    nuevoLibro.autor = autor.value;
    nuevoLibro.genero = genero.value;
    nuevoLibro.editorial = editorial.value;
    nuevoLibro.ISBN = ISBN.value;
    nuevoLibro.cant_paginas = cantPag.value;
    titulo.value = "";
    autor.value = "";
    genero.value = "";
    editorial.value = "";
    ISBN.value = "";
    cantPag.value = "";
    modal.classList.add("oculto");
    modal.children[0].classList.add("oculto");
    contentMain.classList.remove("deshabilitado");
    miBiblioteca.addNewBook(nuevoLibro);
    createRegister("Libro Creado Con Éxito",nuevoLibro);
  }
  else{
    alert("Hay campos vacíos, por favor rellénelos");
  }
}


  /**
   * Crea y agrega un contenedor con un mensaje como título y los datos del libro (creado/prestado/devuelto).
   * @param {string} msg - mensaje que se usa como título del contenedor.
   * @param {Libro} libro - Libro que se creó, prestó o devolvió.
   */
function createRegister(msg,libro){
  const fragmento = document.createDocumentFragment();
  const container = document.createElement("div");
  const mensaje = document.createElement("h1");
  const datosLibro = document.createElement("ul");
  const tituloLibro = document.createElement("li");
  const autorLibro = document.createElement("li");
  const generoLibro = document.createElement("li");
  const editorialLibro = document.createElement("li");
  const ISBN_Libro = document.createElement("li");
  const cantPagLibro = document.createElement("li");

  container.classList.add("container_msg");

  mensaje.textContent = msg;
  tituloLibro.textContent = "Título: "+libro.titulo;
  autorLibro.textContent = "Autor: "+libro.autor;
  generoLibro.textContent = "Género: "+libro.genero;
  editorialLibro.textContent = "Editorial: "+libro.editorial;
  ISBN_Libro.textContent = "ISBN: "+libro.ISBN;
  cantPagLibro.textContent = "Cantidad De Páginas: "+libro.cant_paginas;

  datosLibro.appendChild(tituloLibro);
  datosLibro.appendChild(autorLibro);
  datosLibro.appendChild(generoLibro);
  datosLibro.appendChild(editorialLibro);
  datosLibro.appendChild(ISBN_Libro);
  datosLibro.appendChild(cantPagLibro);

  container.appendChild(mensaje);
  container.appendChild(datosLibro);
  fragmento.appendChild(container);
  registers.appendChild(fragmento);
}

function mostrarPrestarLibro(){
  if(miBiblioteca.libros.length != 0){
    modal.classList.remove("oculto");
    modal.children[1].classList.remove("oculto");
    const select = document.getElementById("libro_a_prestar");
    miBiblioteca.libros.forEach(
      libro =>{
        const opcion = document.createElement("option");
        opcion.value = libro.id;
        opcion.textContent = libro.titulo;
        select.appendChild(opcion);
      }
    )
    contentMain.classList.add("deshabilitado");
  }
  else{
    alert("No tienes más libros para prestar");
  }

}

function prestarLibro(){
  const select = document.getElementById("libro_a_prestar");
  if(select.value!=""){
    let libro = miBiblioteca.lendBook(parseInt(select.value),usuario);
    createRegister("Libro Prestado con éxito",libro);
    select.value = "";
    [...select.children].forEach(
      opcion => {
        if(opcion.value!=""){
          select.removeChild(opcion);
        }
      }
    )
    modal.classList.add("oculto");
    modal.children[1].classList.add("oculto");
    contentMain.classList.remove("deshabilitado");
  }
  else{
    alert("No has seleccionado ningún libro")
  }
}

function mostrarDevolverLibro(){
  if(usuario.libros.length != 0){
    modal.classList.remove("oculto");
    modal.children[2].classList.remove("oculto");
    const select = document.getElementById("libro_a_devolver");
    usuario.libros.forEach(
      libro =>{
        const opcion = document.createElement("option");
        opcion.value = libro.id;
        opcion.textContent = libro.titulo;
        select.appendChild(opcion);
      }
    )
    contentMain.classList.add("deshabilitado");
  }
  else{
    alert("No tienes libros para devolver")
  }
}

function devolverLibro(){
  const select = document.getElementById("libro_a_devolver");
  if(select.value!=""){
    let libro = miBiblioteca.returnBook(parseInt(select.value),usuario);
    createRegister("Libro Devuelto con éxito",libro);
    select.value = "";
    [...select.children].forEach(
      opcion => {
        if(opcion.value!=""){
          select.removeChild(opcion);
        }
      }
    )
    modal.classList.add("oculto");
    modal.children[2].classList.add("oculto");
    contentMain.classList.remove("deshabilitado");
  }
  else{
    alert("No has seleccionado ningún libro")
  }
}

function cancelar(event){
  modal.classList.add("oculto");
  event.target.parentNode.classList.add("oculto");
  contentMain.classList.remove("deshabilitado");
  if(event.target.parentNode.classList.contains("container_newBook")){
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const genero = document.getElementById("genero");
    const editorial = document.getElementById("editorial");
    const ISBN = document.getElementById("ISBN");
    const cantPag = document.getElementById("cant_pag");
    titulo.value = "";
    autor.value = "";
    genero.value = "";
    editorial.value = "";
    ISBN.value = "";
    cantPag.value = "";
  }
  else if(event.target.parentNode.classList.contains("container_lendBook") || event.target.parentNode.classList.contains("container_returnBook")){
    [...event.target.parentNode.children[1].children].forEach(
      opcion=>{
        if(opcion.value!=""){
          event.target.parentNode.children[1].removeChild(opcion);
        }
      }
    )
  }
}

function cerrarSesion(){
  localStorage.removeItem("username");
  window.location.href = "./index.html";
}