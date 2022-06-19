var vecchia;
var vincite = 0;
var perdite = 0;

var mosse;
var trovata;

function scegliCarta(n) {
	if (!trovata) {
		if (parseInt(n) == vecchia) {
		document.getElementById(n).style.backgroundImage = "url('img/vecchia.jpg')";
		trovata = true;
		}
		else document.getElementById(n).style.visibility = "hidden";
		mosse++;

		if (trovata && mosse < 3) {
			vincite++;
			document.getElementById("vincite").innerHTML = vincite;
		}
		else if (mosse == 2){
			perdite++;
			document.getElementById("perdite").innerHTML = perdite;
		}
	}
}

function init() {
	for (let i = 1; i <= 3; i++) {
		document.getElementById(i).style.backgroundSize = "100% 100%"
	}
	nuovaPartita();
}

function nuovaPartita() {
	vecchia = Math.floor((Math.random() * 3) + 1);
	for (let i = 1; i <= 3; i++) {
		document.getElementById(i).style.backgroundImage = "url('img/dorso.jpg')"
		document.getElementById(i).style.visibility = "visible";
	}
	mosse = 0;
	trovata = false;
}