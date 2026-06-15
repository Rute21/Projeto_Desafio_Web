//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#classificacao')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit' ,(evt) =>{
   evt.preventDefault()

const objFormDados = new FormData(formDados)

let ladoA= parseFloat(objFormDados.get('ladoA'))
let ladoB= parseFloat(objFormDados.get('ladoB'))
let ladoC =parseFloat(objFormDados.get('ladoC'))


let resultado = document.getElementById("resultado");

if (ladoA+ b > c && ladoA + c > b && b + c > ladoA) {

   if (ladoA ===  && ladoB === ladoC) {
       resultado.innerText = "Triângulo Equilátero";
   } 
   else if (ladoA ===  ladoB || ladoA === ladoC ||  ladoB === ladoC) {
       resultado.innerText = "Triângulo Isósceles";
   } 
   else {
       resultado.innerText = "Triângulo Escaleno";
   }

} else {
   resultado.innerText = "Não forma um triângulo válido";
}
}

divResultado.innerHTML = 


formDados.requestFullscreen()

})
