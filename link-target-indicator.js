var aa = document.querySelectorAll('a');

for (let a of aa) {
	a.addEventListener('mouseenter', function (event) {
		document.querySelector('.bmko_link-target-indicator').classList.remove('bmko_hidden');
	});
	a.addEventListener('mouseleave', function (event) {
		document.querySelector('.bmko_link-target-indicator').classList.add('bmko_hidden');
	});
}

var icon = document.createElement('div');
icon.classList.add('bmko_link-target-indicator', 'bmko_hidden');

console.log('titty boobs');
console.log(document.body);

document.body.appendChild(icon);
