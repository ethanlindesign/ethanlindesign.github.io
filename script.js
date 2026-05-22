  window.addEventListener('load', () => {
    console.log('testing loading');

    const splash = document.getElementById('splash');
    const audio = document.getElementById('myAudio');

    console.log(splash);
    console.log(audio);

    splash.addEventListener('click', () => {
      console.log('testing click event');
      audio.play();
      splash.remove();
    });
  });