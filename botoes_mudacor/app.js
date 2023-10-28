/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

for(let i = 1; i <=5; i++){
    let botao = document.querySelector('#btn' + i)

    if(i === 1){
        botao.addEventListener('click', () => {
            document.querySelector('h3').style.color = 'blue' 
            
        })
    }

    if(i === 2){
        botao.addEventListener('click', () => {
            document.querySelector('h3').style.backgroundColor = '#87c8e0'
        })
    }

    if(i === 3){
        botao.addEventListener('click', () => {
            document.querySelector('h3').style.backgroundColor = 'green'
        })
    }

    if(i === 4){
        botao.addEventListener('click', () => {
            document.querySelector('h3').style.backgroundColor = 'red'
        })
    }

    if(i === 5){
        botao.addEventListener('click', () => {
            document.querySelector('h3').style.backgroundColor = 'yellow'
        })
    }
}