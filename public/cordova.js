var event = new Event('deviceready');
setTimeout(function () {
	document.dispatchEvent(event);
}, 250);