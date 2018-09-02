$('.button-submit.home').click(function() { var value = $('#input-searchhome').val(); if (value != '') { sendGAEvent('Search', 'Search Full', value.toLowerCase()); $(this).parents('form').submit(); } }); document.getElementById('input-searchhome').onkeydown = function(e){ if(e.keyCode == 13){ var value = $(this).val(); if (value != '') { sendGAEvent('Search', 'Search Full', value.toLowerCase()); $(this).parents('form').submit(); } return false; } }; 
var requestoptrack = new XMLHttpRequest();
  var urltoptrack = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=indonesia&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&format=json&limit=12';

requestoptrack.open("GET", urltoptrack, true);

requestoptrack.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.tracks.track;
var out= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

        
out += '	 <div class="obj">  <div class="obj-inside"> <a href="/site-search.html?to-q=' + ah[i].artist.name+' ' + ah[i].name+ '" class="link-obj"></a> ';
  out += "<div class='img'> <img width='100%' src='" + findUrl(ah[i].image, "large") + "' alt='" + ah[i].artist.name+" " + ah[i].name+ "'> <span class='span-view'>" + ah[i].listeners+ "</span> </div> ";
 
out += ' <h3 class="title-main-obj ellipsis-2">' + ah[i].name+ '</h3>  <h4 class="title-sub ellipsis-2">' + ah[i].artist.name+'</h4> </div> </div> ';
 }
    document.getElementById("toptrack").innerHTML = out;

}

requestoptrack.send();


var requestopartist = new XMLHttpRequest();
  var urltopartist = 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&format=json&limit=12';

requestopartist.open("GET", urltopartist, true);

requestopartist.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.artists.artist;
var out= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

out += '	 <div class="obj">  <div class="obj-inside"> <a href="/site-search.html?to-q=' + ah[i].name+ '" class="link-obj"></a> ';
  out += "<div class='img'> <img width='100%' src='" + findUrl(ah[i].image, "large") + "' alt='" + ah[i].name+ "'></div> ";
 
out += ' <h3 class="title-main-obj ellipsis-2">' + ah[i].name+ '</h3> </div> </div> ';
 }
    document.getElementById("topartist").innerHTML = out;

}

requestopartist.send();




var requestrock = new XMLHttpRequest();
  var urlkpop = 'http://api.soundcloud.com/tracks.json?limit=12&client_id='+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+'';

requestrock.open("GET", urlkpop, true);

requestrock.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
    var i;
	for (var i = 0; i < data.length; i++) {
	if (data[i].artwork_url) {
    var gbr = '' + ganti(data[i].artwork_url) + '';
} else {
    var gbr = 'https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png';
}
      
  out += '  <div class="obj"> <div class="obj-inside"> <a href="/site-listen.xhtml?to-id=' + data[i].id + '&to-title=' + data[i].title + '&to-user=' + data[i].user.id + '" class="link-obj"></a> <div class="img"> <img width="100%" src="'+gbr+'" alt="' + data[i].title + '"/><span class="span-view">'+durasi(data[i].duration)+'</span> </div> <h3 class="title-main-obj ellipsis-2">' + data[i].title + '</h3> <h4 class="title-sub ellipsis-2">' + data[i].user.username + '</h4> </div> </div> ';
 
	}
    document.getElementById("newsongs").innerHTML = out;

}

requestrock.send();


var popular = new XMLHttpRequest();
 var urlpopular = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails,id&type=video&videoCategoryId=10&chart=mostpopular&regionCode=ID&maxResults=12&key='+askmdkmsadjksadmksadmksadkjsadihicascnkasjdnkjah+'';

popular.open("GET", urlpopular, true);

popular.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ah = data.items;
   var oh =data.pageInfo;
 var out= "";
    var i;
	for (var i = 0; i < ah.length; i++) {
	
      out+='<div class="obj"> <div class="obj-inside"> <a href="/site-watch.html?to-id=' + ah[i].id + '&to-channel=' + ah[i].snippet.channelId + '" class="link-obj"></a> <div class="img"> <img width="100%" src="' + ah[i].snippet.thumbnails.high.url + '" alt="' + gantijudul(ah[i].snippet.title) + '"> <span class="span-view">' + ah[i].statistics.viewCount + '</span> </div> <h3 class="title-main-obj ellipsis-2">' + gantijudul(ah[i].snippet.title) + '</h3> 	  <h4 class="title-sub title-singer ellipsis-2">' + ah[i].snippet.channelTitle + '</h4> </div> </div> ';		
	}
document.getElementById("videotranding").innerHTML = out;

}

popular.send();


var cat = new XMLHttpRequest();
  var urlcat = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&format=json&limit=10';

cat.open("GET", urlcat, true);

cat.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.tags.tag;
var out= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

        
out += '<a title="' + ah[i].name+ '" href="site-genre-music.xhtml?to-genre=' + ah[i].name+ '">Lagu ' + ah[i].name+ ' </a>';
	}
    document.getElementById("cat").innerHTML = out;

}

cat.send();
