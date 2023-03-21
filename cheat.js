let cheatButtonNum = 0;
function cheat() {
	
	cheatButtonNum++;
	if (cheatButtonNum == 1) {
	document.getElementById('submitCheat').style.display = "block";	
	document.getElementById('main').style.display = "none";
	document.getElementById('cheat').value = "return";
	}
	
	if (cheatButtonNum == 2) {
		cheatButtonNum = 0;
	}
	
	if (cheatButtonNum == 0) {
	document.getElementById('submitCheat').style.display = "none";	
	document.getElementById('main').style.display = "block";
	document.getElementById('cheat').value = "Edit your balance";
	}
}

let wlEditValue = 0;
let dlEditValue = 0;
let bglEditValue = 0;

function saveEdit() {
	wlEditValue = parseInt(document.getElementById('wlCheatInput').value);
	dlEditValue = parseInt(document.getElementById('dlCheatInput').value);
	bglEditValue = parseInt(document.getElementById('bglCheatInput').value);
	
	if (isNaN(wlEditValue) || isNaN(dlEditValue) || isNaN(bglEditValue) ) {
		alert('enter only number as edit value');
		return;
	}
	
	if (wlEditValue > 200 || dlEditValue > 200 || bglEditValue > 200) {
		return;
	}
	
	
	
	wlValue = wlEditValue;
	dlValue = dlEditValue;
	bglValue = bglEditValue;
	
	if (wlValue > 200 || dlValue > 200 || bglValue > 200 || wlValue < 0 || dlValue < 0 || bglValue < 0) {
		wlValue = wlValue - wlEditValue;
		dlValue = dlValue - dlEditValue;
		bglValue = bglValue - bglEditValue;
		
		alert('wl, dl or bgl value should not be above 200 or below 0');
		return;
	}
}
