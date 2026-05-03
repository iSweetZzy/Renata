const poemas = {
  1: `Eu gosto de você de um jeito que não cabe em palavras...

É algo calmo, mas ao mesmo tempo intenso,
como se cada detalhe seu tivesse encontrado
um lugar exato dentro de mim.

Teu sorriso me desmonta,
teu olhar me prende,
e quando eu percebo...
já estou pensando em você de novo.

E no meio de tudo isso,
entre sentimentos e vontades,
eu só tenho uma certeza:

eu quero você.`,

  2: `Você não é só alguém especial...

você é aquele pensamento constante,
aquele sorriso que aparece sem motivo,
aquela vontade que cresce sem pedir permissão.

Tem algo em você que me acalma,
mas ao mesmo tempo bagunça tudo aqui dentro.

E quanto mais eu te sinto,
mais eu percebo que isso não é pequeno.

Não é só gostar...

é querer você por perto,
de verdade.`,

  3: `O que eu sinto por você vai além de carinho...

é desejo também.

É vontade de estar perto,
de diminuir qualquer distância,
de sentir tudo isso sem precisar imaginar.

Tem algo em você que me provoca,
que me chama,
que me faz querer descobrir cada detalhe.

E eu não quero fingir que é pouco.

Porque não é.

Eu não quero só momentos com você...

eu quero você,
por inteiro.`
};

/* ABRIR POEMA */
function abrirCarta(num) {
  const carta = document.getElementById("carta");
  const texto = document.getElementById("textoPoema");

  texto.innerText = poemas[num];
  carta.classList.remove("hidden");
}

/* PEDIDO */
function aceitou() {
  const resposta = document.getElementById("resposta");
  resposta.innerText = "Renata, agora você é a imperatriz da minha vida 💜";
  resposta.classList.remove("hidden");
}

/* BOTÃO NÃO FUGINDO */
function fugir(botao) {
  botao.style.position = "absolute";
  botao.style.top = Math.random() * 80 + "%";
  botao.style.left = Math.random() * 80 + "%";
}

/* MÚSICA */
function tocarMusica() {
  const musica = document.getElementById("musica");
  const botao = document.getElementById("btnMusica");

  musica.play();

  botao.innerText = "Tocando... 💜";
  botao.disabled = true;
}

/* CONTADOR DESDE 25 DE ABRIL */
const dataInicio = new Date("2026-04-25T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const contador = document.getElementById("contador");
  if (contador) {
    contador.innerText =
      `Já faz ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos que eu te conheci 💜`;
  }
}

setInterval(atualizarContador, 1000);
atualizarContador();

/* CORAÇÕES */
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(criarCoracao, 300);