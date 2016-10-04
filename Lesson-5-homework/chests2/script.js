var x = null; 
var field = document.getElementById('field');

function appendCh() {
	var img = document.createElement('img');
	var src = x + '.png';
	img.src = src;
	field.appendChild(img);
}

function appendBr() {
	var br = document.createElement('br');
	field.appendChild(br);
}

function check() {
	if (j%2 != 0) {
		x = 1;
		appendCh();
	} if (j%2 == 0 && j%4 != 0) {
		x = 2; 
		appendCh();
	} if (j%4 == 0) {
		x = 3;
		appendCh();
	}
}

// 1 - grey, 2 - white, 3 - black 
function Chests() {
	for (i = 1; i < 9; i++) {
		if (i%2 != 0) {
			for (j = 1; j < 17; j++) {
				check();
			}
		} else {
			for (j = 0; j < 16; j++) {
				check();
			}
		}
		appendBr();
	}
}

Chests();