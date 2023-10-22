menu2.style.right == "-300px"
function menu(){
	let menu2 = document.getElementById("menu2");
	if (menu2.style.right == "-300px") {
		menu2.style.right = "0px"
	} else {
		menu2.style.right = "-300px"
	}
	
}


function theme() {
	var darkmode = "rgb(10,37,32)";
	var lightmode = "rgb(91,211,189)";
	var choice = localStorage.getItem("themec")
	if (choice == "dark") {
		document.body.style.backgroundColor = darkmode;	
		document.getElementById('imgy').src = "images/sun.png";
	} else {
		document.body.style.backgroundColor = lightmode;
		document.getElementById('imgy').src = "images/moon.png";

	}
	document.body.style.transitionDuration = ".2s"
}


function clickTheme() {
	var choice = localStorage.getItem("themec")
	if (choice == "dark") {
		localStorage.setItem('themec', 'light');
		theme();
	} else {
		localStorage.setItem('themec', 'dark');
		theme();
	}
}

if (!localStorage.getItem('themec')) {
	localStorage.setItem('themec', 'dark');
	theme();
} else {
	theme();
}


