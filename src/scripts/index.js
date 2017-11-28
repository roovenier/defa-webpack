const $ = require('jquery');

function requireModules() {
	require('./includes/video.js').init();
	require('./includes/tabs.js');
}

$(function() {
	requireModules();
});
