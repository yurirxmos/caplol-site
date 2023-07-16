document.addEventListener("DOMContentLoaded", function() {
  // Obtendo os dados dos jogadores
  const jogadores = [
    { nome: "INV yuridela", pontos: 300, time: "INV", imagem: "./assets/img/ranked-positions/adc.png" },
    { nome: "VDE Thigas", pontos: 200, time: "VDE", imagem: "./assets/img/ranked-positions/sup.png" },
    { nome: "Eduardo Garen", pontos: 300, time: "DEB", imagem: "./assets/img/ranked-positions/top.png" },
    { nome: "hydruZ mete fofo", pontos: 100, time: "FAG", imagem: "./assets/img/ranked-positions/mid.png" },
    { nome: "Askedre", pontos: 200, time: "UNB", imagem: "./assets/img/ranked-positions/mid.png" },
    { nome: "HEZ Ivankov xB", pontos: 100, time: "HEZ", imagem: "./assets/img/ranked-positions/sup.png" },
    { nome: "um anão mt loko", pontos: 100, time: "UMP", imagem: "./assets/img/ranked-positions/top.png" },
    { nome: "POKIN PEGA MEMO", pontos: 100, time: "UMP", imagem: "./assets/img/ranked-positions/fill.png" },
    { nome: "ZDC T3K4SH1", pontos: 100, time: "ZDC", imagem: "./assets/img/ranked-positions/mid.png" },
    { nome: "INTZ Wenddel", pontos: 100, time: "INTZ", imagem: "./assets/img/ranked-positions/fill.png" },
    { nome: "Carloniii", pontos: 100, time: "DEB", imagem: "./assets/img/ranked-positions/adc.png" },
    { nome: "Rakão", pontos: 100, time: "DEB", imagem: "./assets/img/ranked-positions/sup.png" },
    { nome: "VDE vital", pontos: 100, time: "DEB", imagem: "./assets/img/ranked-positions/jungle.png" },
    { nome: "VDE 369", pontos: 200, time: "VDE", imagem: "./assets/img/ranked-positions/top.png" },
    { nome: "OLY Hercules", pontos: 100, time: "OLY", imagem: "./assets/img/ranked-positions/jungle.png" },
    { nome: "HEZ magíc", pontos: 100, time: "HEZ", imagem: "./assets/img/ranked-positions/fill.png" },
    { nome: "Neninha", pontos: 100, time: "UNB", imagem: "./assets/img/ranked-positions/sup.png" },
    { nome: "INV João Justino", pontos: 100, time: "INV", imagem: "./assets/img/ranked-positions/top.png" }
  ];

  // Ordenando os jogadores com base nos pontos
  const jogadoresOrdenados = jogadores.sort((a, b) => b.pontos - a.pontos);

  // Atualizando a estrutura HTML com os dados ordenados
  const mvpConteudo = document.querySelector('.mvp-conteudo');
  const lis = mvpConteudo.querySelectorAll('li');
  jogadoresOrdenados.forEach((jogador, index) => {
    const li = lis[index];
    const imgElement = li.querySelector('img');
    const numeroElement = li.querySelector('b');
    const timeElement = li.querySelector('span');
    const nomeElement = li.querySelectorAll('h2')[0];
    const pontosElement = li.querySelectorAll('h2')[1];

    imgElement.src = jogador.imagem;
    numeroElement.textContent = (index + 1).toString();
    timeElement.textContent = jogador.time;
    nomeElement.textContent = jogador.nome;
    pontosElement.textContent = jogador.pontos.toString();
  });
});