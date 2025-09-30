const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto=document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const PalavrasChave = processaTexto()
}
campoResultado.textContent=palavrasChaves.join(",");



function processaTexto(texto){

}

    let palavras=texto.split(/\|;

    for (let i in palavras){

    }
        palavras[i]=palavras{


  palavras = tiraPalavrasRuins(palavras);

  const frequencias = contafrequencias
  let ordenadas = object.keys(frequencias).sort(ordenapalavras);

  function ordenaPalavra(p1,p2){
    return frequencias[p2]-frequencias[p1];

  }
     console.log(ordenadas);
    return ordenadas.slice(0,10);





    function contafrequencias(palavras){
        let frequencias = {};
        for (let in of palavras){
            frequencias[i] = 0;
            for(let j of palavras){
                if(i==j){
                    frequencias[i]++;
                } 



   return frequencias
   
   
   function tiraPalavrasRuins(palavras){
    const PALAVRAS_RUINS= new set (["para,"uma""nós]);
    const palavrasBoas= [];
    for(let palavra of palavras){
    if(!PALAVRAS_RUINS.has(palavra)&& palavra.lenght > 2){
        palavrasBoas.push(palavra);


        return palavrasBoas