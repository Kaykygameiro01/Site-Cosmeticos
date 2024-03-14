const container = document.querySelector(".container");
const itensDoContainer = document.querySelectorAll(".container-item");
const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");

let indiceAtual = 0;

function exibirImagem(indice) {
  const larguraDoImagem = itensDoContainer[0].offsetWidth;
  container.style.transform = `translateX(-${indice * larguraDoImagem}px)`;
}

function exibirProximaImagem() {
  indiceAtual = (indiceAtual + 1) % itensDoContainer.length;
  exibirImagem(indiceAtual);
}

function exibirImagemAnterior() {
  indiceAtual =
    (indiceAtual - 1 + itensDoContainer.length) % itensDoContainer.length;
  exibirImagem(indiceAtual);
}

botaoAnterior.addEventListener("click", function () {
  exibirImagemAnterior();
});

botaoProximo.addEventListener("click", function () {
  exibirProximaImagem();
});

// alterar automaticamente a imagem 
const intervaloId = setInterval(exibirProximaImagem, 3000);
