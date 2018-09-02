var searchmp3 = new XMLHttpRequest();
  var urlmp3 = "http://api.soundcloud.com/tracks.json?q="+q+"&limit=15&offset=10&client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

searchmp3.open("GET", urlmp3, true);

searchmp3.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
    var i;
	for (var i = 0; i < data.length; i++) {
	if (data[i].artwork_url) {
    var gbr = '' + ganti(data[i].artwork_url) + '';
} else {
    var gbr = 'https://lh3.googleusercontent.com/dW0LiRNhqEjj560AAW9xeIEmWG2_JuyP2v_gH7-MWTSisPL0YQ8Sf6SI750eod7i9CU=w300';
}
  out += '  <div class="obj"> <div class="obj-inside"> <a href="/site-listen.xhtml?to-id=' + data[i].id + '&to-title=' + data[i].title + '&to-user=' + data[i].user.id + '" class="link-obj"></a> <div class="img"> <img width="100%" src="'+gbr+'" alt="' + data[i].title + '"/><span class="span-view">'+durasi(data[i].duration)+'</span> </div> <h3 class="title-main-obj ellipsis-2">' + data[i].title + '</h3> <h4 class="title-sub ellipsis-2">' + data[i].user.username + '</h4> </div> </div> ';
	}
  

    document.getElementById("searchmp3").innerHTML = out;
    
}

searchmp3.send();



var searchvideo = new XMLHttpRequest();
 var urlvideo = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&q="+q+"&maxResults=12&order=relevance&key="+askmdkmsadjksadmksadmksadkjsadihicascnkasjdnkjah+"";

searchvideo.open("GET", urlvideo, true);

searchvideo.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ah = data.items;
var oh =data.pageInfo;

  var out= "";
    var i;
	for (var i = 0; i < ah.length; i++) {
	
      
 
      out+='<div class="obj"> <div class="obj-inside"> <a href="/site-watch.html?to-id=' + ah[i].id.videoId + '&to-channel=' + ah[i].snippet.channelId + '" class="link-obj"></a> <div class="img"> <img width="100%" src="' + ah[i].snippet.thumbnails.high.url + '" alt="' + gantijudul(ah[i].snippet.title) + '"></div> <h3 class="title-main-obj ellipsis-2">' + gantijudul(ah[i].snippet.title) + '</h3> 	  <h4 class="title-sub title-singer ellipsis-2">' + ah[i].snippet.channelTitle + '</h4> </div> </div>';		
	}  
document.getElementById("searchvideo").innerHTML = out;
}

searchvideo.send();



