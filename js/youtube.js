    // Esta variable almacenará los reproductores de YouTube
    var players = [];

    // Espera a que la API de YouTube esté lista
    function onYouTubeIframeAPIReady() {
        document.querySelectorAll('.youtube-video').forEach((div, index) => {
            // Crea un reproductor para cada video
            var player = new YT.Player(div, {
                height: '1080',
                width: '1920',
                videoId: div.dataset.videoid,  // Asegúrate de que cada div tiene un atributo 'data-videoid'
                events: {
                    'onReady': function(event) {
                        event.target.setPlaybackQuality('hd1080');
                    }
                }
            });
            players.push(player);
        });
    }

    // Asociar evento a cada pestaña
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            var targetId = event.target.getAttribute('data-bs-target').replace('#', '');
            var videoDiv = document.querySelector('#' + targetId + ' .youtube-video');
            var playerIndex = Array.from(document.querySelectorAll('.youtube-video')).indexOf(videoDiv);
            if (playerIndex !== -1) {
                players[playerIndex].playVideo();  // O cualquier acción que desees realizar
                players[playerIndex].setPlaybackQuality('hd1080');
            }
        });
    });
