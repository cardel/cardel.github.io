function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    height: '1080',
    width: '1920',
    videoId: 'VIDEO_ID',
    events: {
      'onReady': function(event) {
        event.target.setPlaybackQuality('hd1080');
      }
    }
  });
}
