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
      song.albumArt = song.albumArt.replace('100x100bb', '1000x1000bb')
      
      template += `
      <div id="songs">
        <div class="card">
        <img class="card-img-top img-size center-block" src="${song.albumArt}"></img>
        <div class="card-body text-center">
          <h4 class="card-title">${song.title}</h4>
          <p class="card-text">
                  ${song.price}
                  ${song.artist}
                  ${song.collection}
          </p>
          <audio controls="controls" src="${song.preview}"></audio>
        </div>
        </div>
      </div>
      ` 
      // <div class="col-xs-4">
      //   <img class="img-size" src="${song.albumArt}">
      // </div>
      // <div class="col-xs-8">
      //   <ul id="songs">
      //           <h4>Title: ${song.title}</h4>
      //           <h4>Price: $${song.price}</h4>
      //           <h4>Artist: ${song.artist}</h4>
      //           <h4>Collection: ${song.collection}</h4>
      //           <audio controls="controls" src="${song.preview}"></audio>
      //   </ul>
      //  </div>
    }
    document.getElementById('songs').innerHTML = template;
  }  
}
