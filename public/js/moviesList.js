const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let moviesList = qs('.moviesListTitulo')
let body = qs('body')


let respuesta = prompt('¿Desea cambiar A modo Ocuro? si o no')
if(respuesta === "si"){
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add('fondoMoviesList.')
   
}
moviesList.innerText = "LISTADO DE PELÍCULAS"
moviesList.style.color ="white"
moviesList.style.backgroundColor ="teal"
moviesList.style.fontWeight ="20px"



