
const formDados = document.querySelector('#tabela')
const divResultado = document.querySelector('#div-dados')


formDados.addEventListener('submit' ,(evt) =>{
   evt.preventDefault()


const nome= document.getElementById('nome').value;
const peso= parseFloat(document.getElementById('peso').value);
const altura =parseFloat(document.getElementById('altura').value);


const imc = peso / (altura * altura);

let massa = "";

if (imc < 20){
   massa = "Abaixo do peso";

}else if (imc < 25){
   massa = "Normal";
   
}else if (imc < 30){
   massa = "Excesso de peso";
   
}else if (imc < 35){
   massa = "Obesidade";

}else{
   massa = "Obesidade móbida";
}

divResultado.innerHTML = `
<p>Paciente: ${nome}</p>
<p>IMC:${imc.toFixed(2)}</p>
<p>Faixa de risco:${massa}</p>
`;


});
