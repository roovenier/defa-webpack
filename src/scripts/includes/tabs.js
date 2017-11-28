const video = require('./video.js');
const $ = require('jquery');

(function() {
  const $tabLinks = $('.js-tabs-link');
  const $tabsContent = $('.js-tabs-content');

  $tabLinks.on('click', function(e) {
    e.preventDefault();

    const $this = $(this);
    const index = $this.parent().index();

    video.checkVideoState();

    $tabLinks.filter('.active').removeClass('active');
    $this.addClass('active');

    $tabsContent.filter('.active').removeClass('active');
    $tabsContent.eq(index).addClass('active');
  });
})();
