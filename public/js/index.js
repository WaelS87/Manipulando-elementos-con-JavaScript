/*const main = document.querySelector('.container');
const subtitulo = document.querySelectorAll('h2');
const a = document.querySelector('a');
const parafos = document.querySelectorAll('p')
 *******************************************************************otra forma para elegi los elementos */
const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const main = $('mainContainer')
const subtitulo = qs('.subtitulo')
const parrafos = qsa('p')
const listado = qs('h2 a')

let nombre = prompt('ingres tu nombre por fa!!!')

subtitulo.textContent += nombre ? nombre :"invitado"
subtitulo.style.textTransform ="uppercase"

listado.style.color="#E51B3E"

let respuesta = confirm('¿quieres cambiar el fondo?')
if(respuesta){
   qs('body').classList.toggle('fondo')}
parrafos.forEach((parrafo,index)=>{
if(index % 2 === 0 ){
    parrafo.classList.add('destacadoImpar')
}else{
    parrafo.classList.add('destacadoPar')
}

})



main.style.display ="block"
