function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  document.addEventListener('play', function (e) {
    var audios = document.getElementsByClassName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);    
  //Start coding here
  function draw(songList){
    template=''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      song.albumArt = song.albumArt.replace('100x100bb', '1000x1000bb')
      
      template += `
      <div id="songs">
        <div class="card">
        <div class="card-body text-center">
        <img class="card-img-top img-responsive center-block outline" src="${song.albumArt}"></img>

            <h4 class="card-title">${song.title}</h4>
            <p class="card-text">
                  ${song.price}
                  ${song.artist}
                  ${song.collection}
            </p>
            <audio class="audio" controls="controls" src="${song.preview}"></audio>
          </div>
        </div>
      </div>
      ` 
    }
    document.getElementById('songs').innerHTML = template;
  }  
}
