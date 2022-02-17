

var player1 = 'X';
var player2 = 'O';
var vezJogador = 0;
var text_vez = document.getElementById('span-vez-jogador');
var casas = Array();
var vitoria = false;
var empate = false;
var display_vitoria = document.getElementById('marca_vitoria');
var display_empate = document.getElementById('marca_empate');
var botao_reinicia = document.getElementById('btn-reload');

for(let contador = 1; contador<=9; contador++) {
	casas[contador] = document.getElementById(contador)
}

function bloqueiaJogadas() {
	for(var cont=1; cont<=9; cont++) {
		casas[cont].onclick = '';
	}
	vitoria = true;
	display_vitoria.style = "display: block;"
}

function verificaVitoria() {

	//************************verifica vitoria do jogador 1***************************

	if(casas[1].value == player1 && casas[2].value == player1 && casas[3].value == player1) {
		for(var i=1; i<=3; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[4].value == player1 && casas[5].value == player1 && casas[6].value == player1) {
		for(var i=4; i<=6; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[7].value == player1 && casas[8].value == player1 && casas[9].value == player1) {
		for(var i=7; i<=9; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[1].value == player1 && casas[4].value == player1 && casas[7].value == player1) {
		casas[1].style = "color: green;";
		casas[4].style = "color: green;";
		casas[7].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[2].value == player1 && casas[5].value == player1 && casas[8].value == player1) {
		casas[2].style = "color: green;";
		casas[5].style = "color: green;";
		casas[8].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[3].value == player1 && casas[6].value == player1 && casas[9].value == player1) {
		casas[3].style = "color: green;";
		casas[6].style = "color: green;";
		casas[9].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[1].value == player1 && casas[5].value == player1 && casas[9].value == player1) {
		casas[1].style = "color: green;";
		casas[5].style = "color: green;";
		casas[9].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[7].value == player1 && casas[5].value == player1 && casas[3].value == player1) {
		casas[7].style = "color: green;";
		casas[5].style = "color: green;";
		casas[3].style = "color: green;";
		bloqueiaJogadas()
	}

	//***********************verifica vitoria do jogador 2*************************************

	if(casas[1].value == player2 && casas[2].value == player2 && casas[3].value == player2) {
		for(var i=1; i<=3; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[4].value == player2 && casas[5].value == player2 && casas[6].value == player2) {
		for(var i=4; i<=6; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[7].value == player2 && casas[8].value == player2 && casas[9].value == player2) {
		for(var i=7; i<=9; i++) {
			casas[i].style = "color: green;"
		}
		bloqueiaJogadas()
	}

	if(casas[1].value == player2 && casas[4].value == player2 && casas[7].value == player2) {
		casas[1].style = "color: green;";
		casas[4].style = "color: green;";
		casas[7].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[2].value == player2 && casas[5].value == player2 && casas[8].value == player2) {
		casas[2].style = "color: green;";
		casas[5].style = "color: green;";
		casas[8].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[3].value == player2 && casas[6].value == player2 && casas[9].value == player2) {
		casas[3].style = "color: green;";
		casas[6].style = "color: green;";
		casas[9].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[1].value == player2 && casas[5].value == player2 && casas[9].value == player2) {
		casas[1].style = "color: green;";
		casas[5].style = "color: green;";
		casas[9].style = "color: green;";
		bloqueiaJogadas()
	}

	if(casas[7].value == player2 && casas[5].value == player2 && casas[3].value == player2) {
		casas[7].style = "color: green;";
		casas[5].style = "color: green;";
		casas[3].style = "color: green;";
		bloqueiaJogadas()
	}

	if(vitoria == true) {
		text_vez.style = "display: none;";
		botao_reinicia.style = "display: inline-block;";
	} else {
		if(casas[1].value != null &&
			casas[2].value != null &&
			casas[3].value != null &&
			casas[4].value != null &&
			casas[5].value != null &&
			casas[6].value != null &&
			casas[7].value != null &&
			casas[8].value != null &&
			casas[9].value != null) {

			display_empate.style = "display: block;";
			botao_reinicia.style = "display: inline-block;";

		}
	}
}

function mudarVez(casa) {
	if(vezJogador == 0) {
		vezJogador = 1;
		casas[casa].innerHTML = player1;
		casas[casa].onclick = '';
		casas[casa].value = player1;
		text_vez.innerHTML = player2;
	} else {
		vezJogador = 0;
		casas[casa].innerHTML = player2;
		casas[casa].onclick = '';
		casas[casa].value = player2;
		text_vez.innerHTML = player1;
	}

	verificaVitoria();
}

function reiniciaJogo() {
	location.reload();
	return false;
}