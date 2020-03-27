var el1 = document.getElementById('link1');
var el2 = document.getElementById('link2');
var el3 = document.getElementById('link3');
var	el4 = document.getElementById('link4');
var dataEl1 = document.getElementById('collapse1');
var dataEl2 = document.getElementById('collapse2');
var dataEl3 = document.getElementById('collapse3');
var dataEl4 = document.getElementById('collapse4');

el1.onclick = function() {
	el1.className = "nav-link active";
	el2.className = "nav-link";
	el3.className = "nav-link";
	el4.className = "nav-link";
}
el2.onclick = function() {
	el2.className = "nav-link active";
	el1.className = "nav-link";
	el3.className = "nav-link";
	el4.className = "nav-link";
}
el3.onclick = function() {
	el3.className = "nav-link active";
	el2.className = "nav-link";
	el1.className = "nav-link";
	el4.className = "nav-link";
}
el4.onclick = function() {
	el4.className = "nav-link active";
	el2.className = "nav-link";
	el1.className = "nav-link";
	el3.className = "nav-link";
}