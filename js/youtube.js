function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    height: '1080',
    width: '1920',
    events: {
      'onReady': function(event) {
        event.target.setPlaybackQuality('hd1080');
      }
    }
  });
}
