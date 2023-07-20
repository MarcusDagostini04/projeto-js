let numRandom
let lista = []
let qtd = 0
const valorMax = 10 
const valorMaxSite = 100 

function comeco() {
    numRandom = Math.floor(Math.random() * 100 + 1)
    console.log(numRandom)
}

function newGame() {
    window.location.reload()  // window = janela, location = localização, realod = recarregar (Com essa função vou acionar ela no botão para recarregar toda minha página)
}


function numeroDigitado() {
    let numero = document.getElementById('inputBox').value
    lista.push(' ' + numero) // o push vai pegar esse número digitado, jogar na minha lista e armazenar esse valor
    document.getElementById('guesses').innerHTML = lista


    if (qtd < valorMax ) {


        if (numero > valorMaxSite ) {
            document.getElementById('textOutput').innerHTML = 'Número inválido, somente valores entre 1 até 100'
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

        }

        else if (numero > numRandom) {
            document.getElementById('textOutput').innerHTML = 'O número é menor'
            document.getElementById('inputBox').value = ''
            qtd = qtd + 1 
            document.getElementById('attempts').innerHTML = qtd 
        }
        else if (numero < numRandom) {
            document.getElementById('textOutput').innerHTML = 'O número é maior'
            document.getElementById('inputBox').value = ''
            qtd = qtd + 1 // a variável qtd tem o valr de 0 e vai ser somada com 1 + 1 até o número 10
            document.getElementById('attempts').innerHTML = qtd
        }
        else{
            document.getElementById('textOutput').innerHTML = 'Parabéns você acertou'
            qtd = qtd + 1 
            document.getElementById('attempts').innerHTML = qtd  
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')      // com o método setAttribute vai bloquear meu textinput, e precisa de dois valores no parametro, o 'Readonly = Somente leitura em portugues'
        }

    }
    else{
        document.getElementById('textOutput').innerHTML = 'Você perdeu, o número sorteado é ' + numRandom
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

    }

}