$(document).ready(function(){

var $mediaId = "10383023",
  	$clientID = ""+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"",
	$modeKind = "playlists",

	$listurl = "http://api.soundcloud.com/" + $modeKind + "/" + $mediaId + ".json?client_id=" + $clientID,

	$i = 0,
	tracks = new Array(),
	trackdata = new Array(),
	playlist = new Array();

console.debug('$listurl = '+$listurl);
// Get the JSON object (the playlist)
$.ajax({
	url: $listurl,
	async: false,
	dataType: 'json',
	success: function(listdata) {
		// Iterate through the object and create array of tracks in the playlist
		$.each(listdata.tracks, function(key, val) {
			tracks[$i] = val;
			$i++;
		});
		// Now, for each of the tracks, save the necessary track info formatted as options for jPlayerPlaylist, all in another array 
		for (var i = 0; i < tracks.length; i++) {
			trackdata[i] = {
				title: tracks[i].title,
				mp3: tracks[i].stream_url + '?client_id=' + $clientID,
				url: tracks[i].permalink_url,
				sc: "true"
			}
		}
		// Next, stack all these arrays into one array for use in the jPlayer playlist 
		for (i = 0; i < trackdata.length; i++) {
			playlist.push(trackdata[i]);
		}
	}
});

// Instantiate the jPlayer playlist object, using the Soundcloud playlist array   
new jPlayerPlaylist({
		jPlayer: "#jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
	playlist,  {
    playlistOptions: {
      enableRemoveControls: true,
      autoPlay: false
    },
    swfPath: "http://andmod.net/js/jPlayer",
    supplied: "webmv, ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });
  
  $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').removeClass('animate');
    $('.jp-play-me').removeClass('active');
    $('.jp-play-me').parent('li').removeClass('active');
  });

  $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer,  function(){
    $('.musicbar').addClass('animate');
  });

  $(document).on('click', '.jp-play-me', function(e){
    e && e.preventDefault();
    var $this = $(e.target);
    if (!$this.is('a')) $this = $this.closest('a');

    $('.jp-play-me').not($this).removeClass('active');
    $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

    $this.toggleClass('active');
    $this.parent('li').toggleClass('active');
    if( !$this.hasClass('active') ){
      myPlaylist.pause();
    }else{
      var i = Math.floor(Math.random() * (1 + 7 - 1));
      myPlaylist.play(i);
    }
    
  });

});

