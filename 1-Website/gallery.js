function pv(sentence) {
	let pic = event.target;
	let picframe = document.getElementById("picimg");
	let picsent = document.getElementById("sent");
	let frame = document.getElementById("picview");
	
	document.getElementById("picview").style.opacity = "0%";
	document.getElementById("picview").style.visibility = "visible";
	document.getElementById("picview").style.opacity = "100%";
	picframe.src = pic.src;
	picsent.innerText = sentence;

}

function closePic() {
	document.getElementById("picview").style.visibility = "hidden"
	
}