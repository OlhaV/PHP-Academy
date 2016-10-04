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
	if (i%2 != 0) {
		x = 2; 
		appendCh();
	} else {
		x = 3; 
		appendCh();			
	}
}
// 1 - grey, 2 - white, 3 - black 
function Chests() {
	for (j = 1; j < 9; j++) {
		if (j%2 == 0) {
			for (i = 0; i < 8; i++) {
				check();
			}
		} else {
			for (i = 1; i < 9; i++) {
				check();
			}
		}	
		appendBr();
	}
}

Chests();