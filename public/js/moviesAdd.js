const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);


let moviesAdd = qs(".moviesAddTitulo")
let formulario = $("formulario")
let article = qs("article")


moviesAdd.innerText = "AGREGAR PELÍCULAS"
moviesAdd.classList.add('titulo')
article.classList.add("fondoTransparente")
formulario.classList.add("fondoCRUD")

