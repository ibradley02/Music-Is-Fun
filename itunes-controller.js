function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList){
    template=''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
      <ul id="songs">
        <h4>Title: ${song.title}</h4>
        <img class="img-responsive" src="${song.albumArt}">
        <h4>Price: $${song.price}</h4>
        <h4>Artist: ${song.artist}</h4>
        <h4>Collection: ${song.collection}</h4>
        <audio controls="controls" src="${song.preview}"></audio>
      </ul>
      ` 
    }
    document.getElementById('songs').innerHTML = template;
  }  
}
