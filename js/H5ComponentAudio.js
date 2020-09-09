window.isAddAudio = false;
var cssObj = {
  top: 20 * h5Screen.hPer + 'px',
  right: 20 * h5Screen.hPer + 'px',
  width: 50 * h5Screen.hPer + 'px',
  height: 50 * h5Screen.hPer + 'px',
};

var H5ComponentAudio = function(name, cfg){
  var component = new H5ComponentBase(name, cfg);
  console.log(name, cfg, 'name, cfg');
  component.css(cssObj);
  component.on('click', utils.switchMusicIcon);

  var btn = $('<div class="music-btn">');

  var imgSrc = cfg.imgSrc;
  var img = $('<img class="uniformlyRotating" src="'+imgSrc+'" alt="music" />');
  btn.append(img);

  if (!isAddAudio && !$("#someID").length) {
    window.isAddAudio = true;

    var audio = $('<audio class="audio">');
    audio.attr({
      loop: 'loop',
      id: 'pageMusic',
      autoplay: true,
      preload: 'auto',
      src: cfg.src && cfg.src,
    });
    $('body').append(audio);
    // utils.createAudio();
  }

  component.append(btn);

  return component;
}
