let listaDeNumeros = [];
let limiteNumeros = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function exibirTexto(tag,texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}


function exibirMensagemInicial() {
  exibirTexto('h1', 'Jogo do Número secreto');
  exibirTexto('p', 'Escolha um numero entre 0 e 100');  
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value; 
 
  if (chute==numeroSecreto) {
    exibirTexto('h1', 'Acertô mizeravi');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Ê acertô! Ah mizeravi com ${tentativas} ${palavraTentativa}!`;
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if(chute > numeroSecreto){
        exibirTexto('h1', 'ERROOOOOOOOU');
        exibirTexto('p', 'O número secreto é menor');
      } else{
        exibirTexto('h1', 'ERROOOOOOOOU');
        exibirTexto('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
  }
}

function numeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * limiteNumeros + 1);
  let quantidadeElementosDaLista = listaDeNumeros.length;
  if (quantidadeElementosDaLista = limiteNumeros) {
    listaDeNumeros = [];
  }

  if (listaDeNumeros.includes(numeroSorteado)) {
    return numeroAleatorio();
  } else {
    listaDeNumeros.push(numeroSorteado);
    console.log (listaDeNumeros);
    return numeroSorteado;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}
