
var carta1 = {
  nome: "Tigre",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/Siberian-tiger.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 5,
    Agilidade: 4,
  }
};

var carta2 = {
  nome: "Leão",
  imagem: "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/lion-3049884_1280.jpg",
  atributos: {
    ataque: 9,
    defesa: 10,
    Agilidade: 3,
  }
};

var carta3 = {
  nome: "Leopardo",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/leopard-walking.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 8,
    Agilidade: 8,
  }
};

var carta4 = {
  nome: "Onça Pintada",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/Jaguar-brothers-in-the-Pantanal.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 8,
    Agilidade: 7,
  }
};

var carta5 = {
  nome: "Leopardo das Neves",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Snow-leopard-AdobeStock_243151027.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 5,
    Agilidade: 8,
  }
};

var carta6 = {
  nome: "Caracal",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/serval.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 5,
    Agilidade: 8,
  }
};

var carta7 = {
  nome: "Caracal",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/Caracal.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 5,
    Agilidade: 8,
  }
};

var carta8 = {
  nome: "Puma Yagouroundi",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/Jaguarundi-AdobeStock_229904391.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 5,
    Agilidade: 3,
  }
};

var carta9 = {
  nome: "Gato de Areia",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/Sand-cat.jpg",
  atributos: {
    Ataque: 2,
    Defesa: 6,
    Agilidade: 9,
  }
};

var carta10 = {
  nome: "Cheetah",
  imagem:
    "https://540934-1733880-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/two-cheetahs.jpg",
  atributos: {
    Ataque: 4,
    Defesa: 5,
    Agilidade: 10,
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3,carta4, carta5, carta6, carta7,carta8, carta9, carta10];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  document.getElementById("btnJogarNovamente").disabled= false;
 jogar();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
