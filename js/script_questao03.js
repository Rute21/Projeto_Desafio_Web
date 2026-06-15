
const formDados = document.querySelector('#calculo')
const divResultado = document.querySelector('#div-dados')


formDados.addEventListener('submit' ,(evt)=>{
   evt.preventDefault()

const objFormDados = new FormData(formDados);

const distancia=parseFloat(objFormDados.get('distancia'));
const consumo = parseFloat(objFormDados.get('consumo'));
const preco = parseFloat(objFormDados.get('preço'));

const combustivel = distancia / consumo;
const custoTotal = combustivel * preco;


divResultado.innerHTML =  
   "<p>Combustível necessário:" + combustivel.toFixed(2) + "litros</p>" +
   "<p>Custo total: R$ "+ custoTotal.toFixed(2) +"</p>";

})
