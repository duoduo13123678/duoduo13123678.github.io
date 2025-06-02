const audio = document.querySelector('audio');
audio
    .play()
    .then(() => {
        console.log("AutoPlay!");
    })
    .catch((e) => {
        console.log("E");
        if (e instanceof DOMException) {
            const autoPlayAfterAnyClick = () => {
                if (audio.paused == true) {
                    console.log("Play!!!");
                    audio.play();
                } else {
                    console.log("Pause.");
                    audio.pause();
                };
            };
            document.addEventListener('click', autoPlayAfterAnyClick);
        } else {
            throw e;
        };
    })