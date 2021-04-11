var jogadores = [];

function excluiExtremos(t1, t2, t3, t4, t5) {
var tempos = [t1, t2, t3, t4, t5];
			//    5.3 7.7 7.5 8.9 6.2	 		

var menorTempo = Math.min.apply(null, tempos); // 5.3
var maiorTempo = Math.max.apply(null, tempos); // 8.9

var posicaoMenorTempo = tempos.indexOf(menorTempo); // 0
tempos.splice(posicaoMenorTempo, 1);
           // A partir da posição 0 | (incluindo a posição 0) deleta 1

var posicaoMaiorTempo = tempos.indexOf(maiorTempo); // 3
tempos.splice(posicaoMaiorTempo, 1);
		   // A partir da posição 3 |  (incluindo a posição 3) deleta 1 

return tempos;
}

// t = array
function media(t) {
var soma = 0;
for (var i = 0; i < t.length; i++) {
	var tempo = t[i];
	soma = soma + tempo;
}
return soma / t.length;
}

function adicionaJogador(nome, t1, t2, t3, t4, t5) {
var temposSemExtremos = excluiExtremos(t1, t2, t3, t4, t5); // é o retorno da função que é um array com 3 elementos
var mediaDeTempos = media(temposSemExtremos);
var melhorTempo = Math.min.apply(null, temposSemExtremos);
var linhaDaTabela = ` 
	<tr>
		<td>
			${nome}
		</td>
		<td>
			${t1}
		</td>
		<td>
			${t2}
		</td>
		<td>
			${t3}
		</td>
		<td>
			${t4}
		</td>
		<td>
			${t5}
		</td>
		<td>
			${mediaDeTempos.toFixed(2)}
		</td>
		<td>
			${melhorTempo}
		</td>
	</tr>
`;

var tabelaAnterior = document.querySelector("#tabelaJogadores").innerHTML;
document.querySelector("#tabelaJogadores").innerHTML = linhaDaTabela + tabelaAnterior;

jogadores.push({
	nome: nome,
	tempo: melhorTempo
});
classificaJogadores();

document.querySelector("#btnSubmeter").onclick = btnAdicionaJogador; // rataria
}

function classificaJogadores() {
if (jogadores.length < 3) {
	return; // break (estudar)
}

var jogadoresClassificados = jogadores.sort(function(jogadorUm, jogadorDois) {
	return jogadorUm.tempo - jogadorDois.tempo;
})
var primeiro = jogadoresClassificados[0].nome;
var segundo = jogadoresClassificados[1].nome;
var terceiro = jogadoresClassificados[2].nome;

document.querySelector("#classificacao").innerHTML = `
	<li>${primeiro}</li>
	<li>${segundo}</li>
	<li>${terceiro}</li>
`;
}

function btnAdicionaJogador() {
var nome = document.querySelector("#nome").value;
var t1 = parseFloat(document.querySelector("#t1").value);
var t2 = parseFloat(document.querySelector("#t2").value);
var t3 = parseFloat(document.querySelector("#t3").value);
var t4 = parseFloat(document.querySelector("#t4").value);
var t5 = parseFloat(document.querySelector("#t5").value);
adicionaJogador(nome, t1, t2, t3, t4, t5);
}

adicionaJogador("Pedro Moreira", 11.29, 14.26, 8.96, 9.32, 8.76);
adicionaJogador("Gustavo Takechi", 12.45, 14.26, 12.20, 14.45, 12.90);
adicionaJogador("Abner Gomes", 16.12, 16.33, 15.03, 19.10, 16.08);			
adicionaJogador("Anita Zemdegs Lima", 5.04, 6.12, 6.22, 3.79, 5.98);

document.querySelector("#btnSubmeter").onclick = btnAdicionaJogador;