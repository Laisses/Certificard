/*
	- [x] duas cartas lado a lado
	- [x] migrar javascript para cá
	<hr />
	- [x] usar imagens locais ao invés das remotas para os homens

	- [x] fazer o nome das cartar caber na caixinha de nome
	- [x] embelezar placar e quantidade de cartas
	- [x] ativar animação do élfico
	<hr />
	- [ ] colocar botões de sortear entre as cartas
	- [ ] juntar variáveis das cartas em uma variável só
	- [ ] botão de próxima rodada
	- [ ] adicionar link para o certificard
*/

// Animação do header

/*
function escondeIntro() {
	intervalo = setInterval(esconder,20);
}

function esconder() {
	var textoIntro = document.querySelector("#intro");
	opacity = Number(window.getComputedStyle(textoIntro).getPropertyValue("opacity"));

	if (opacity > 0) {
		opacity = opacity - 0.1;
		intro.style.opacity = opacity;

	} else {
		clearInterval(intervalo);
	}
}
*/

var letras = 0;
var textoElfico = "One Ring to rule them all One Ring to find them One Ring to bring them all	and in the darkness bind them";
var speed = 50; //milissegundos

var opacity = 0;
var intervalo = 0;

function escreveElfico() {
	if (letras < textoElfico.length) {
		document.querySelector("#elfico").innerHTML += textoElfico.charAt(letras);
		letras++;
		setTimeout(escreveElfico, speed);
	} else {
		mostraIntro();
	}
}

function mostraIntro() {
	intervalo = setInterval(mostrar,100);
}

function mostrar() {
	var textoIntro = document.querySelector("#intro");
	opacity = Number(window.getComputedStyle(textoIntro).getPropertyValue("opacity"));

	if (opacity < 1) {
		opacity = opacity + 0.1;
		intro.style.opacity = opacity;

	} else {
		clearInterval(intervalo);
	}
}

// Declaração do deck de cartas //

var cartaBeren = {
	nome: "Beren",
	tipo: "Edain",
	imagem: "material/trunfo-do-anel/homens/beren_camlost_by_eve_ventrue.jpg",
	atributos: {
		resiliencia: 80,
		forca: 100,
		poder: 60,
		agilidade: 50,
		coragem: 90
	}    		
}

var cartaElendil = {
	nome: "Elendil",
	tipo: "Numenoriano",
	imagem: "material/trunfo-do-anel/homens/elendil_by_kimberly80.jpg",
	atributos: {
		resiliencia: 50,
		forca: 90,
		poder: 30,
		agilidade: 50,
		coragem: 70
	}    		
}

var cartaIsildor = {
	nome: "Isildor",
	tipo: "Numenoriano",
	imagem: "material/trunfo-do-anel/homens/isildur_by_samo_art.jpg",
	atributos: {
		resiliencia: 40,
		forca: 85,
		poder: 10,
		agilidade: 60,
		coragem: 70
	}    		
}

var cartaBard = {
	nome: "Bard",
	tipo: "Homem do Lago",
	imagem: "material/trunfo-do-anel/homens/bard_the_bowman_by_suz87.jpg",
	atributos: {
		resiliencia: 60,
		forca: 50,
		poder: 20,
		agilidade: 60,
		coragem: 70
	}    		
}

var cartaAragorn = {
	nome: "Aragorn",
	tipo: "Dúnedain",
	imagem: "material/trunfo-do-anel/homens/aragorn_by_cao_ke_gong.jpg",
	atributos: {
		resiliencia: 70,
		forca: 80,
		poder: 60,
		agilidade: 50,
		coragem: 70
	}    		
}

var cartaDenathor = {
	nome: "Denethor",
	tipo: "Gondoriano",
	imagem: "material/trunfo-do-anel/homens/denethor_by_magali_vileneuve.jpg",
	atributos: {
		resiliencia: 20,
		forca: 40,
		poder: 50,
		agilidade: 10,
		coragem: 30
	}    		
}

var cartaBoromir = {
	nome: "Boromir",
	tipo: "Gondoriano",
	imagem: "material/trunfo-do-anel/homens/boromir_by_aurore_folny.jpg",
	atributos: {
		resiliencia: 40,
		forca: 85,
		poder: 20,
		agilidade: 50,
		coragem: 80
	}
}

var cartaFaramir = {
	nome: "Faramir",
	tipo: "Gondoriano",
	imagem: "material/trunfo-do-anel/homens/faramir_by_magali_vileneuve.jpg",
	atributos: {
		resiliencia: 50,
		forca: 80,
		poder: 20,
		agilidade: 50,
		coragem: 70
	}    		
}

var cartaTheoden = {
	nome: "Théoden",
	tipo: "Rohirrim",
	imagem: "material/trunfo-do-anel/homens/theoden_by_varsha_vijayan.jpg",
	atributos: {
		resiliencia: 50,
		forca: 70,
		poder: 30,
		agilidade: 55,
		coragem: 60
	}    		
}

var cartaEomer = {
	nome: "Éomer",
	tipo: "Rohirrim",
	imagem: "material/trunfo-do-anel/homens/eomer_by_magali_vileneuve.jpg",
	atributos: {
		resiliencia: 50,
		forca: 70,
		poder: 35,
		agilidade: 60,
		coragem: 60
	}    	
}

var cartaEowyn = {
	nome: "Éowyn",
	tipo: "Rohirrim",
	imagem: "material/trunfo-do-anel/homens/eowyn_by_magali_villeneuve.jpg",
	atributos: {
		resiliencia: 70,
		forca: 60,
		poder: 50,
		agilidade: 60,
		coragem: 70
	}    		
}

// Cartas dos Hobbits //

var cartaFrodo = {
	nome: "Frodo",
	tipo: "Hobbit",
	imagem: "https://i.pinimg.com/564x/c8/b6/8d/c8b68d3a2abc86f4ce57f0d4a9d88d5f.jpg",
	atributos: {
		resiliencia: 50,
		forca: 20,
		poder: 50,
		agilidade: 30,
		coragem: 85
	}    		
}

var cartaBilbo = {
	nome: "Bilbo",
	tipo: "Hobbit",
	imagem: "https://designrshub-designrshub.netdna-ssl.com/wp-content/uploads/2013/03/bilbo-baggins-07.jpg",
	atributos: {
		resiliencia: 30,
		forca: 20,
		poder: 50,
		agilidade: 30,
		coragem: 70
	}    		
}

var cartaSam = {
	nome: "Samwise",
	tipo: "Hobbit",
	imagem: "https://s3.amazonaws.com/hallofbeorn-resources/Images/LotR/Characters/Sam-Gamgee.jpg",
	atributos: {
		resiliencia: 30,
		forca: 25,
		poder: 30,
		agilidade: 40,
		coragem: 100
	}    		
}

var cartaPippin = {
	nome: "Pippin",
	tipo: "Hobbit",
	imagem: "https://s3.amazonaws.com/hallofbeorn-resources/Images/LotR/Characters/Pippin.jpg",
	atributos: {
		resiliencia: 30,
		forca: 20,
		poder: 30,
		agilidade: 55,
		coragem: 80
	}    		
}

var cartaMerry = {
	nome: "Merry",
	tipo: "Hobbit",
	imagem: "https://i.pinimg.com/originals/13/df/41/13df4136550a26a32aa556427ad6fa6a.jpg",
	atributos: {
		resiliencia: 30,
		forca: 20,
		poder: 30,
		agilidade: 50,
		coragem: 80
	}    		
}


// Cartas dos Anões //     

var cartaDurin = {
	nome: "Durin I",
	tipo: "Anão",
	imagem: "https://i.ytimg.com/vi/jAyaTOYNqfQ/hqdefault.jpg",
	atributos: {
		resiliencia: 80,
		forca: 45,
		poder: 50,
		agilidade: 30,
		coragem: 50
	}    		
}

var cartaBalin = {
	nome: "Balin",
	tipo: "Anão",
	imagem: "https://i.pinimg.com/564x/c7/36/4d/c7364d37576452867737a46c1044e961.jpg",
	atributos: {
		resiliencia: 90,
		forca: 50,
		poder: 30,
		agilidade: 30,
		coragem: 60
	}    		
}

var cartaThror = {
	nome: "Thrór",
	tipo: "Anão",
	imagem: "https://static.wikia.nocookie.net/lotr/images/e/e4/King_Thror_concept_art.jpg/revision/latest/scale-to-width-down/230?cb=20170127120108",
	atributos: {
		resiliencia: 80,
		forca: 50,
		poder: 20,
		agilidade: 30,
		coragem: 40
	}    	
}

var cartaThorin = {
	nome: "Thorin",
	tipo: "Anão",
	imagem: "https://i.pinimg.com/564x/57/bf/e5/57bfe54632a6e83ef2664550a4ddd6e0.jpg",
	atributos: {
		resiliencia: 100,
		forca: 65,
		poder: 10,
		agilidade: 30,
		coragem: 65
	}    		
}

var cartaGimli = {
	nome: "Gimli",
	tipo: "Anão",
	imagem: "https://cafans.b-cdn.net/images/Category_62552/subcat_111494/Matt%20Stewart%20Gimli%20Forty%20Two.jpg",
	atributos: {
		resiliencia: 85,
		forca: 60,
		poder: 35,
		agilidade: 30,
		coragem: 55
	}    		
}

// Cartas dos Elfos //

var cartaGlorfindel = {
	nome: "Glorfindel",
	tipo: "Elfo",
	imagem: "https://static.wikia.nocookie.net/lotr/images/e/ed/Glorfindel-0.jpg/revision/latest/scale-to-width-down/294?cb=20170628041038",
	atributos: {
		resiliencia: 50,
		forca: 65,
		poder: 85,
		agilidade: 100,
		coragem: 60
	}    		
}

var cartaGaladriel = {
	nome: "Galadriel", 
	tipo: "Elfo",
	imagem: "material/trunfo-do-anel/elfos/galadriel_by_victoria_victorem.jpg",
	atributos: {
		resiliencia: 50,
		forca: 70,
		poder: 95,
		agilidade: 80,
		coragem: 70
	}    		
}

var cartaGilGalad = {
	nome: "Gil-galad",
	tipo: "Elfo",
	imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7564bda-842b-4b8e-a21b-27dab68a6ac6/dbv51vb-13ebf3e2-7e2e-492f-b02f-1baa87b2e9f8.png/v1/fill/w_1024,h_1095,strp/gil_galad_by_kaprriss_dbv51vb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDk1IiwicGF0aCI6IlwvZlwvYTc1NjRiZGEtODQyYi00YjhlLWEyMWItMjdkYWI2OGE2YWM2XC9kYnY1MXZiLTEzZWJmM2UyLTdlMmUtNDkyZi1iMDJmLTFiYWE4N2IyZTlmOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HsXSJEfdK02UjzAUmtDDmzvoNHK7187rQs-m__mYyYk",
	atributos: {
		resiliencia: 50,
		forca: 60,
		poder: 65,
		agilidade: 80,
		coragem: 70
	}    		
}

var cartaElrond = {
	nome: "Elrond",
	tipo: "Elfo",
	imagem: "https://static.wikia.nocookie.net/rpg-rise-of-the-titans/images/d/da/Elrond.jpg/revision/latest?cb=20200811211215&path-prefix=pt-br",
	atributos: {
		resiliencia: 40,
		forca: 60,
		poder: 70,
		agilidade: 80,
		coragem: 60
	}    		 
}

var cartaArwen = {
	nome: "Arwen",
	tipo: "Elfo",
	imagem: "http://2.bp.blogspot.com/-oJbwhSgbeyg/UI8SK3VUuNI/AAAAAAAANo8/QNhHJX8F098/s1600/Arwen_MagaliVilleneuve.jpeg",
	atributos: {
		resiliencia: 40,
		forca: 60,
		poder: 50,
		agilidade: 80,
		coragem: 60
	}    		
}

var cartaLuthien = {
	nome: "Lúthien",
	tipo: "Elfo",
	imagem: "https://static.wikia.nocookie.net/lotr/images/6/67/Luthien_by_moon_blossom-d2klr1v.png/revision/latest?cb=20131228225501",
	atributos: {
		resiliencia: 60,
		forca: 70,
		poder: 70,
		agilidade: 95,
		coragem: 65
	}    		
}

var cartaLegolas = {
	nome: "Legolas",
	tipo: "Elfo",
	imagem: "https://i.pinimg.com/originals/b3/36/f6/b336f6a988c1bafb8bad0a6c69666d6b.jpg",
	atributos: {
		resiliencia: 60,
		forca: 60,
		poder: 50,
		agilidade: 90,
		coragem: 70
	}    		
}

// Cartas dos Magos //

var cartaAlator = {
	nome: "Alator",	
	tipo: "Mago Azul",
	imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5553f261-ab12-41ae-bf6c-3b9da1da16c0/dd5yec0-83d8756a-9a25-4dc5-a78b-c9ee935c2d69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTU1M2YyNjEtYWIxMi00MWFlLWJmNmMtM2I5ZGExZGExNmMwXC9kZDV5ZWMwLTgzZDg3NTZhLTlhMjUtNGRjNS1hNzhiLWM5ZWU5MzVjMmQ2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6LrMJYg7d2f3mRkwN-Yx6qJxU8-RrhXw0Ux7dwi7pTo",
	atributos: {
		resiliencia: 50,
		forca: 50,
		poder: 80,
		agilidade: 50,
		coragem: 50
	}
}

var cartaPallando = {
	nome: "Pallando",
	tipo: "Mago Azul",
	imagem: "https://i.pinimg.com/originals/81/e5/d1/81e5d1e4cec8a1f1fa706c5f8bffd9fd.jpg",
	atributos: {
		resiliencia: 50,
		forca: 50,
		poder: 80,
		agilidade: 50,
		coragem: 50
	}    		
}

var cartaSaruman = {
	nome: "Saruman",
	tipo: "Mago Muitas Cores",
	imagem: "https://pbs.twimg.com/media/EcNOw9nXQAEG9tr.jpg",
	atributos: {
		resiliencia: 50,
		forca: 65,
		poder: 95,
		agilidade: 60,
		coragem: 50
	}    		
}

var cartaGandalfCinza = {
	nome: "Gandalf",
	tipo: "Mago Cinza",
	imagem: "http://2.bp.blogspot.com/-uA0IuJ2Jmm8/UI8SKP2vxpI/AAAAAAAANo0/XDmBoMMR-d4/s1600/00_MagaliVilleneuve.jpeg",
	atributos: {
		resiliencia: 60,
		forca: 60,
		poder: 90,
		agilidade: 60,
		coragem: 60
	}    		
}

var cartaGandalfBranco = {
	nome: "Gandalf",
	tipo: "Mago Branco",
	imagem: "https://i.pinimg.com/originals/38/0d/c2/380dc25bd31fc68423e73a581c447967.jpg",
	atributos: {
		resiliencia: 60,
		forca: 70,
		poder: 100,
		agilidade: 60,
		coragem: 80
	}    		
}

var cartaRadagast = {
	nome: "Radagast",
	tipo: "Mago Marrom",
	imagem: "https://custorage.blob.core.windows.net/gallery-24/art/gome-radagast.jpg",
	atributos: {
		resiliencia: 60,
		forca: 55,
		poder: 80,
		agilidade: 60,
		coragem: 60
	}		
}

var cartas = [cartaBeren, cartaElendil, cartaIsildor, cartaBard, cartaAragorn, cartaDenathor, cartaBoromir, cartaFaramir, cartaTheoden, cartaEomer, cartaEowyn, cartaFrodo, cartaBilbo, cartaSam, cartaPippin, cartaMerry, cartaDurin, cartaBalin, cartaThror, cartaThorin, cartaGimli, cartaGlorfindel, cartaGaladriel, cartaGilGalad, cartaElrond, cartaArwen, cartaLuthien, cartaLegolas, cartaAlator, cartaPallando, cartaSaruman, cartaGandalfCinza, cartaGandalfBranco, cartaRadagast];

// Lógica de cartas //

var cartaMaquina;
var cartaJogador;

var pontosJogador = 0;
var pontosMaquina = 0;

function atualizaPlacar() {
	document.querySelector("#placar").innerHTML = `Jogador ${pontosJogador} | ${pontosMaquina} Sauron.`;
}

	function atualizaQuantidadeDeCartas() {
	document.querySelector("#quantidade-cartas").innerHTML = `Quantidade de cartas no jogo: ${cartas.length}.`
}

function posicao() {
	return Math.floor(Math.random() * cartas.length);
}	

function sortearCartas() {  
	document.querySelector("#carta-jogador").classList.remove("tampar");
	document.querySelector("#carta-maquina").classList.add("tampar");
	document.querySelector("#resultado").innerHTML = "";

	var posicaoCartaMaquina = posicao();
	cartaMaquina = cartas[posicaoCartaMaquina];
	cartas.splice(posicaoCartaMaquina, 1);
	var posicaoCartaJogador = posicao();
	cartaJogador = cartas[posicaoCartaJogador];
	cartas.splice(posicaoCartaJogador, 1);
	atualizaQuantidadeDeCartas();

	document.querySelector("#btnSortear").disabled = true;
	document.querySelector("#btnJogar").disabled = false;

	distribuiCartas();  		
}

function distribuiCartas() {
	document.querySelector("#carta-jogador .nome").innerHTML = cartaJogador.nome;
	document.querySelector("#carta-jogador .tipo").innerHTML = cartaJogador.tipo;
	document.querySelector("#carta-jogador img").src = cartaJogador.imagem;

	document.querySelector("#carta-jogador .forca").innerHTML = cartaJogador.atributos.forca;
	document.querySelector("#carta-jogador .resiliencia").innerHTML = cartaJogador.atributos.resiliencia;
	document.querySelector("#carta-jogador .poder").innerHTML = cartaJogador.atributos.poder;
	document.querySelector("#carta-jogador .agilidade").innerHTML = cartaJogador.atributos.agilidade;
	document.querySelector("#carta-jogador .coragem").innerHTML = cartaJogador.atributos.coragem;


	document.querySelector("#carta-maquina .nome").innerHTML = cartaMaquina.nome;
	document.querySelector("#carta-maquina .tipo").innerHTML = cartaMaquina.tipo;
	document.querySelector("#carta-maquina img").src = cartaMaquina.imagem;

	document.querySelector("#carta-maquina .forca").innerHTML = cartaMaquina.atributos.forca;
	document.querySelector("#carta-maquina .resiliencia").innerHTML = cartaMaquina.atributos.resiliencia;
	document.querySelector("#carta-maquina .poder").innerHTML = cartaMaquina.atributos.poder;
	document.querySelector("#carta-maquina .agilidade").innerHTML = cartaMaquina.atributos.agilidade;
	document.querySelector("#carta-maquina .coragem").innerHTML = cartaMaquina.atributos.coragem;
}

function obtemAtributoSelecionado() {
		var inputSelecionado = document.querySelector("input[name=atributo]:checked");

		if (inputSelecionado !== null) {
			return inputSelecionado.value;
		}
	}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	if (!atributoSelecionado) {
		alert("Selecione um atributo da sua carta.");
		return;
	}

	document.querySelector("#carta-maquina").classList.remove("tampar");
	document.querySelector("#btnSortear").disabled = false;
	document.querySelector("#btnJogar").disabled = true;

	var atributoJogador = cartaJogador.atributos[atributoSelecionado];
	var atributoMaquina = cartaMaquina.atributos[atributoSelecionado];

	var resultado;

	if (atributoJogador > atributoMaquina) {
		resultado = "Você venceu!";
		pontosJogador++;
	} else if (atributoJogador < atributoMaquina) {
		resultado = "Você perdeu!";
		pontosMaquina++;
	} else {
		resultado = "Foi um empate!";
	}

	document.querySelector("#resultado").innerHTML = resultado;
	atualizaPlacar();

	if (cartas.length === 0) {
		document.querySelector("#btnSortear").disabled = true;

		var resultadoFinal;
		if (pontosJogador > pontosMaquina) {
			resultadoFinal = "Você TRIUNFOU!";
		} else if (pontosJogador < pontosMaquina) {
			resultadoFinal = "Você FALHOU!";
		} else {
			resultadoFinal = "Esperemos a próxima Era!"
		}
		resultadoFinal += `
			<br />
			Recarregue a página para jogar novamente.
		`;
		document.querySelector("#resultado").innerHTML = resultadoFinal;
	}
}

var btnJogar = document.querySelector("#btnJogar");
btnJogar.disabled = true;
btnJogar.onclick = jogar;
document.querySelector("#btnSortear").onclick = sortearCartas;

atualizaPlacar();
atualizaQuantidadeDeCartas();
escreveElfico();