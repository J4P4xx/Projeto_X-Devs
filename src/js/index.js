// OBJETIVO 1 - quando clicarmos na seta da avançar temos que mostrar o próximo cartao da lista

//  - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//  - passo 2 - dar um jeito de identificar o clique do usuário na seta avaçar 
btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1 ) return;

    //  - passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    //  - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

//OBJETIVO 2 quando clicarmos na seta de voltar temos que mostrar o cartão anterior
btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});
