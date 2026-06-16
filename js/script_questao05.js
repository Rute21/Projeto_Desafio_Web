
const formDados = document.querySelector('#classificacao')
const divResultado = document.querySelector('#div-dados')


formDados.addEventListener('submit' ,(evt) =>{
   evt.preventDefault()

const objFormDados = new FormData(formDados)

let ladoA= parseFloat(objFormDados.get('ladoA'))
let ladoB= parseFloat(objFormDados.get('ladoB'))
let ladoC =parseFloat(objFormDados.get('ladoC'))


let resultado = "";

if (ladoA == ladoB && ladoB == ladoC) {
    resultado = "Triângulo Equilátero";
} else if (
    ladoA == ladoB ||
    ladoA == ladoC ||
    ladoB == ladoC 
 ) {
    resultado= "Triângulo Isósceles";
} else {
    resultado= "Triângulo Escaleno";
}


divResultado.innerHTML = `<h3>${resultado}</h3>`




})
