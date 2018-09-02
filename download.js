var requestview = new XMLHttpRequest();
  var urlkpop = "http://api.soundcloud.com/tracks/"+id+".json?client_id=e6a418026e80a163d5c079afb49202c4";

requestview.open("GET", urlkpop, true);

requestview.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";

if (data.artwork_url) {
    var gbr = '' + ganti(data.artwork_url) + '';
} else {
    var gbr = 'https://lh3.googleusercontent.com/dW0LiRNhqEjj560AAW9xeIEmWG2_JuyP2v_gH7-MWTSisPL0YQ8Sf6SI750eod7i9CU=w300';
}

  out += '<div class="wrapper"><div class="breadcrumb-nav"><a class="breadcrumb-item" href="/">Home</a> » <a class="breadcrumb-item" href="/site_genre.xhtml?get-genre=' + data.genre + '">' + data.genre + '</a> » <span class="breadcrumb-current">' + data.title + '</span></div><div class="song-description"><center><img src="' + gbr + '"></center><p>Di sini Anda dapat mengunduh dan mendengarkan lagu online «' + data.title + '» dalam kualitas 320 kbit.</p><ul><li>Durasi: ' + durasi(data.duration) + ' </li><li>Play: ' + data.playback_count + '</li><li>Upload: ' + time(data.created_at) + '</li><li>Size: ' + humanFileSize(data.original_content_size) + '</li><li>Comments: ' + data.comment_count + '</li><li>Format: ' + data.original_format + '</li></ul></div><h1><span class="song-wrap-artist">' + data.title + '</span></h1><b>Download Gratis Lagu <u> ' + data.title + ' </u></b> hanya untuk review saja Belilah kaset asli atau cd original dari album nya atau gunakan <b><u>Nada Sambung</u></b> Pribadi Sebagai bentuk apresiasi penghargaan agar mereka tetap bisa berkarya<div class="sharethis-inline-reaction-buttons"></div></div> <div class="wrapper songs"><div class="song-item grid"><div class="song-play"><div class="play" data-url="' + data.stream_url + '?client_id=e6a418026e80a163d5c079afb49202c4"></div></div><div class="song-title"><a href="#">' + data.title + '</a></div><div class="song-duration"><span>' + humanFileSize(data.original_content_size) + '</span></div><div class="song-down"><a href="/site_download.xhtml?get-id=' + data.id + '&get-title=' + data.title + '&get-size=' + humanFileSize(data.original_content_size) + '"></a></div></div>    </div><div class="wrapper song-actions grid"><div class="listen"><a href="' + data.stream_url + '?client_id=e6a418026e80a163d5c079afb49202c4&app_version=b3c1742b">DOWNLOAD FAST</a></div><div class="dl"><a href="/site_get_mp3.xhtml?get-id='+id+'" target="_BLANK" >DOWNLOAD</a></div></div><div class="wrapper social-share"><div class="sharethis-inline-share-buttons"></div></div>';
	
  


	
    document.getElementById("detail").innerHTML = out;

}

requestview.send();