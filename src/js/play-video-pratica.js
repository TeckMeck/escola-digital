document.addEventListener("DOMContentLoaded", function () {
    var playButtons = document.querySelectorAll('.aula-item img');
    
    playButtons.forEach(function(button, index) {
        button.addEventListener('click', function () {
            openVideoModal(getVideoLink(index + 1)); // Adapte para o seu caso
        });
    });
});

function getVideoLink(videoNumber) {
    // Adicione a lógica para retornar os links dos vídeos com base no número
    switch (videoNumber) {
        case 1:
            return 'https://www.youtube.com/watch?v=97cYPBqpjJE';
        case 2:
            return 'https://www.youtube.com/watch?v=zh11wkXyJxk';
        default:
            return ''; // Retorna uma string vazia se não houver correspondência
    }
}

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
