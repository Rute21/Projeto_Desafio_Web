
const formDados = document.querySelector('#media')
const divResultado = document.querySelector('#div-dados')


formDados.addEventListener('submit' ,(evt)=>{
evt.preventDefault();

const objFormDados = new FormData(formDados);

let nota1= parseFloat(objFormDados.get('nota1'));
let nota2 = parseFloat(objFormDados.get('nota2'));
let nota3= parseFloat(objFormDados.get('nota3'));
let situacao = "";
let media =(nota1 + nota2 + nota3) / 3

  if(media>=6) {
   situacao = "APROVADO"
  }else{
   situacao = "REPROVADO"
  }
  
   divResultado.innerHTML = 
   `A MÉDIA DE DRIELLE É: ${media.toFixed(2).replace('.',',')}<br>
   SITUAÇÃO: ${situacao}`;

   


formDados.requestFullscreen()

})
