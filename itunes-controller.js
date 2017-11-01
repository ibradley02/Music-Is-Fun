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
      <div id="songs">
        <img src="${song.albumArt}">
        <h4>${song.artist}</h4>
        <h4>${song.collection}</h4>
        <h4>${song.preview}</h4>
        <h4>${song.price}</h4>
        <h4>${song.title}</h4>
      </div>
      ` 
    }
    document.getElementById('songs').innerHTML = template;
    console.log(songList);
  }  
}
