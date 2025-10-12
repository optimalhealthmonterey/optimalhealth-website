jQuery(document).ready($ => {
    [...$('.optimal.podcast')].forEach(p => {
        const el = $(p),
            audio = $('<audio>').attr({"src": el.data('url'), "preload" : "none"});
        el.html(audio);
        audio.mediaelementplayer();
    })
});