const $ = require('jquery');

function requireModules() {
	require('./includes/gallery.js').init();
	require('./includes/tabs.js');
}

$(function() {
	requireModules();
});
