function alertM() {
	alert('This link opens in another tab, click "ok" to continue, or press the "esc" button to cancel the request.')
}
function openS() {
	document.getElementById('side-nav').style.display = "block";
	document.getElementById('side-nav').style.width = "250px";
	document.getElementById('overlay').style.display = "block";
}
function closeS() {
	document.getElementById('side-nav').style.display = "none";
	document.getElementById('side-nav').style.width = "0px";
	document.getElementById('overlay').style.display = "none";
}
function onClick(element) {
	document.getElementById('modal').style.display = "block";
	document.getElementById('img').src = element.src;
	document.getElementById('txt').innerHTML = element.alt;
	var mod = document.getElementById('modal');
	window.onclick = function (event) {
		if (event.target == mod) {mod.style.display = "none";}
	};
};
function closeM() {
	document.getElementById('modal').style.display = 'none';
};
