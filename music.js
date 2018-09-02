var searchmp3 = new XMLHttpRequest();
  var urlmp3 = "http://api.soundcloud.com/tracks.json?limit=15&offset="+page+"&client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

searchmp3.open("GET", urlmp3, true);

searchmp3.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
    var i;
	for (var i = 0; i < data.length; i++) {
	if (data[i].artwork_url) {
    var gbr = '' + art300(data[i].artwork_url) + '';
} else {
    var gbr = 'https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png';
}
  out += '  <div class="obj"> <div class="obj-inside"> <a href="/site-listen.xhtml?to-id=' + data[i].id + '&to-title=' + data[i].title + '&to-user=' + data[i].user.id + '" class="link-obj"></a> <div class="img"> <img width="100%" src="'+gbr+'" alt="' + data[i].title + '"/><span class="span-view">'+durasi(data[i].duration)+'</span> </div> <h3 class="title-main-obj ellipsis-2">' + data[i].title + '</h3> <h4 class="title-sub ellipsis-2">' + data[i].user.username + '</h4> </div> </div> ';
 
	}
  
var balik=page-1;
  var lanjut=balik+2;


  if (balik > 0) {
    var prev='<a href="/site-music.html?to-page='+balik+'" class="arr-left"><i class="ic icr-left"></i></a>'; }else{ 
    var prev='';}
  var next='<a href="/site-music.html?to-page='+lanjut+'" class="arr-right"><i class="ic icr-right"></i></a> ';
  	var paging=''+prev+' <span>Page '+page+'</span> '+next+'';
document.getElementById("paging").innerHTML = paging;
    document.getElementById("newmusic").innerHTML = out;
        

}

searchmp3.send();
