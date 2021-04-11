var ditados = [
	{
		frase: "Vão-se os anéis, ficam os ",
		resposta: "dedos"
	},
	{
		frase: "Água mole, pedra dura, tanto bate até que ",
		resposta: "fura"
	},
	{
		frase: "A pressa é a inimiga da ",
		resposta: "perfeição"
	},
	{
		frase: "À noite todos os gatos são ",
		resposta: "pardos"
	},
	{
		frase: "Antes só do que mal ",
		resposta: "acompanhado"
	},
	{
		frase: "Antes tarde do que ",
		resposta: "nunca"
	},
	{
		frase: "Boca calada não entra ",
		resposta: "mosca"
	},
	{
		frase: "Cada macaco no seu ",
		resposta: "galho"
	},
	{
		frase: "Caiu na rede, é ",
		resposta: "peixe"
	},
	{
		frase: "Casa de ferreiro, espeto de ",
		resposta: "pau"
	},
	{
		frase: "Cachorro que late não ",
		resposta: "morde"
	},
	{
		frase: "Cavalo dado não se olha os ",
		resposta: "dentes"
	},
	{
		frase: "Dai a César o que é de ",
		resposta: "César"
	},
	{
		frase: "De grão em grão, a galinha enche o ",
		resposta: "papo"
	},
	{
		frase: "De médico e de louco todo mundo tem um ",
		resposta: "pouco"
	},
	{
		frase: "Deus ajuda quem cedo ",
		resposta: "madruga"
	},
	{
		frase: "Deus escreve certo por linhas ",
		resposta: "tortas"
	},
	{
		frase: "Diz-me com quem andas e eu te direi quem ",
		resposta: "és"
	},
	{
		frase: "Em terra de cego quem tem olho é ",
		resposta: "rei"
	},
	{
		frase: "É melhor prevenir do que ",
		resposta: "remediar"
	},
	{
		frase: "Gato escaldado tem medo de água ",
		resposta: "fria"
	},
	{
		frase: "Ladrão que rouba ladrão tem cem anos de ",
		resposta: "perdão"
	},
	{
		frase: "Mente vazia, oficina do ",
		resposta: "diabo"
	},
	{
		frase: "Não adianta chorar pelo leite ",
		resposta: "derramado"
	},
	{
		frase: "Não confunda alhos com ",
		resposta: "bugalhos"
	},
	{
		frase: "Não deixe para amanhã o que você pode fazer ",
		resposta: "hoje"
	},
	{
		frase: "Nem tudo o que brilha é ",
		resposta: "ouro"
	},
	{
		frase: "Onde Judas perdeu as ",
		resposta: "botas"
	},
	{
		frase: "O barato sai ",
		resposta: "caro"
	},
	{
		frase: "O que é do homem o bicho não ",
		resposta: "come"
	},
	{
		frase: "O que os olhos não veem, o coração não ",
		resposta: "sente"
	},
	{
		frase: "Onde há fumaça há ",
		resposta: "fogo"
	},
	{
		frase: "Para bom entendedor, meia palavra ",
		resposta: "basta"
	},
	{
		frase: "Pimenta nos olhos dos outros é ",
		resposta: "refresco"
	},
	{
		frase: "Panela velha é que faz comida ",
		resposta: "boa"
	},
	{
		frase: "Quem canta seus males ",
		resposta: "espanta"
	},
	{
		frase: "Quem não tem cão, caça com ",
		resposta: "gato"
	},
	{
		frase: "Quem pode, pode; quem não pode, se ",
		resposta: "sacode"
	},
	{
		frase: "Quem semeia vento, colhe ",
		resposta: "tempestade"
	},
	{
		frase: "Quem fala o que quer ouve o que não ",
		resposta: "quer"
	},
	{
		frase: "Quando a esmola é demais o santo ",
		resposta: "desconfia"
	},
	{
		frase: "Quem não arrisca não ",
		resposta: "petisca"
	},
	{
		frase: "Rir é o melhor ",
		resposta: "remédio"
	},
	{
		frase: "Saco vazio não para em ",
		resposta: "pé"
	},
	{
		frase: "Todos os caminhos levam a ",
		resposta: "Roma"
	},
	{
		frase: "Uma andorinha sozinha não faz ",
		resposta: "verão"
	}
];

var ditadoSorteado;
var acertos = 0;
var totalDitados = ditados.length;
var enter = 13;

function sorteio() {
	return ditados[Math.floor(Math.random() * ditados.length)];
}

function sortearDitado() {
	ditadoSorteado = sorteio();
	document.querySelector("#ditado").innerHTML = ditadoSorteado.frase;
}

function tiraAcentos(s) {
	return s
		.toLowerCase()
		.replaceAll(":", "")
		.replaceAll(".", "")
		.replaceAll(",", "")
		.replaceAll("-", "")
		.replaceAll("á", "a")
		.replaceAll("ã", "a")
		.replaceAll("à", "a")
		.replaceAll("é", "e")
		.replaceAll("ê", "e")
		.replaceAll("í", "i")
		.replaceAll("ó", "o")
		.replaceAll("ô", "o")
		.replaceAll("ú", "u")
		.replaceAll("ü", "u")
		.replaceAll("ç", "c");
}

function confereResposta() {
	var resposta = document.querySelector("#chute").value;
	var tagResultado = document.querySelector("#resultado");

	if (tiraAcentos(resposta) === tiraAcentos(ditadoSorteado.resposta)) {
		tagResultado.innerHTML = "Correto!";				
		acertos++;
	} else if (resposta === "") {
		alert("Faltou digitar a resposta.");
	} else {
		tagResultado.innerHTML = "Oooooops! Não foi dessa vez!";				
	}
}

function proximo() {
	ditados = ditados.filter(function(ditado) {
		return ditado !== ditadoSorteado;
	});
	if (ditados.length === 0) {
		document.querySelector("#resultado").innerHTML = "Os ditados terminaram. Parabéns! Você acertou " + acertos + "/" + totalDitados + ".";
		return;
	}
	sortearDitado();
	document.querySelector("#chute").value = "";
	document.querySelector("#resultado").innerHTML = "";
}

function apertaEnter (event) {
	if (event.keyCode == enter) {
		confereResposta();
	}
}

document.onkeydown = apertaEnter;

sortearDitado();
document.querySelector("#btnResponder").onclick = confereResposta;
document.querySelector("#btnPular").onclick = proximo;
document.querySelector("#btnProximo").onclick = proximo;