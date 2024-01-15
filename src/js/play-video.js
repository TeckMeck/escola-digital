document.addEventListener("DOMContentLoaded", function () {
    var playButton = document.getElementById('play-button');
    playButton.addEventListener('click', function () {
        openVideoModal('https://www.youtube.com/watch?v=OcM1BQhT360');
    });
});

function openVideoModal(videoLink) {
    var videoIframe = document.getElementById('youtube-video');
    var embedLink = videoLink.replace("/watch?v=", "/embed/");
    videoIframe.src = embedLink;

    // Torna a div do modal visível
    document.getElementById('video-modal').classList.remove('modal-hidden');
}

function closeVideoModal() {
    document.getElementById('video-modal').classList.add('modal-hidden');
    var videoIframe = document.getElementById('youtube-video');
    videoIframe.src = ''; // Define uma string vazia para parar o vídeo
}