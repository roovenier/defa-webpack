const video = {
	playerObject: null,

	init: function() {
    const self = this;
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady() {
      self.playerObject = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'GU-2T7k9NfI',
      });
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
	},

  checkVideoState: function() {
    if(this.playerObject) {
        const statusCode = this.playerObject.getPlayerState();

        if(statusCode === 1) {
          this.pauseVideo();
        }
    }
  },

  pauseVideo: function() {
    this.playerObject.pauseVideo();
  }
};

module.exports = video;
