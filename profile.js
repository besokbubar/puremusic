var profile = new XMLHttpRequest();
  var urlprofile = "http://api.soundcloud.com/users/"+id+"?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

profile.open("GET", urlprofile, true);

profile.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
  
  var judul="Profile "+data.username+""; 
document.title= judul;
if (data.avatar_url) {
    var gbr = '' + ganti(data.avatar_url) + '';
} else {
    var gbr = 'https://lh3.googleusercontent.com/dW0LiRNhqEjj560AAW9xeIEmWG2_JuyP2v_gH7-MWTSisPL0YQ8Sf6SI750eod7i9CU=w300';
}
 out += '  <div class="artist-header" style="background-image:url('+gbr+')"> <div class="artist-header-inside"> <h1>'+data.username+'</h1> <p class="counter-follower" area="follow-total">'+data.followings_count+'</p> <div class="artist-header-menu"> <ul class="clearfix"> <li><a class="active" href="#">Semua</a> </li>  <li> <a href="/site-user-about.html?to-id='+data.id+'">Tentang</a> </li><li> <a href="/site-user-music.html?to-id='+data.id+'">Lagu</a> </li> <li> <a href="/site-user-followers.html?to-id='+data.id+'>Followers</a> </li> <li> <a href="/site-user-playlist.html?to-id='+data.id+'">Playlist</a> </li> </ul> </div> </div> </div> <div class="artist-bio"> <p class="align-justify ellipsis-3">'+readmore(data.description)+'</p> <p> <a href="/site-user-about.html?to-id='+data.id+'">Lebih lanjut</a> </p> </div> <h2 class="title-main" style="float: left;">Lagu dari '+data.username+'</h2> <div style="clear: both;"></div> </div> ';

  document.getElementById("pfheader").innerHTML = out;

}

profile.send();


var usertrack = new XMLHttpRequest();
  var urlusertrack = "http://api.soundcloud.com/users/"+id+"/tracks?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"&limit=7";

usertrack.open("GET", urlusertrack, true);

usertrack.onload = function () {
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
 
  out += '    <div class="obj non-padr"><div class="obj-inside not-img"> <a href="/site-listen.xhtml?to-id=' + data[i].id + '&to-title=' + data[i].title + '&to-user=' + data[i].user.id + '" class="link-obj"></a> <h3 class="title-song ellipsis-2">' + data[i].title + ' -- '+durasi(data[i].duration)+' </h3> <h4 class="title-singer">' + data[i].user.username + '</h4> </div> </div> ';

	}
	
	
  if(5 < i){
var lanjut='<a href="/site-user-music.html?to-id='+id+'" class="btn-more-text">Lebih lanjut<i class="ic"></i></a> ';
   }else{
   var lanjut='';}
   document.getElementById("lanjut").innerHTML = lanjut; document.getElementById("usertracks").innerHTML = out;
    
}

usertrack.send();


var userplaylist = new XMLHttpRequest();
  var urlplaylist = "http://api.soundcloud.com/users/"+id+"/playlists?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

userplaylist.open("GET", urlplaylist, true);

userplaylist.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    //var data = data.collection;
	var out= "";
	
    var i;
	for (var i = 0; i < data.length; i++) {
	if (data[i].user.avatar_url) {
    var gbr = '' + art300(data[i].user.avatar_url) + '';
} else {
    var gbr = 'https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png';
}
 
  out += ' <div class="obj"> <div class="obj-inside"> <a href="/site-user.xhtml?to-if=' + data[i].id + '" class="link-obj"></a> <div class="img"> <img width="100%" src="'+gbr+'" alt="Spirit - J-Rocks"> <span class="span-view">'+durasi(data[i].duration)+'</span> </div> <h3 class="title-main-obj ellipsis-2">' + data[i].title + '</h3> <h4 class="title-sub ellipsis-2">Tracks  ' + data[i].track_count + '</h4> </div> </div> ';

	}
	if (1>i){
	out+='Belum ada playlist';
	}

    if(5 < i){
var lanjutkan='<a href="/site-user-playlist.html?to-id='+id+'" class="btn-more-text">Lebih lanjut<i class="ic"></i></a> ';
   }else{
   var lanjutkan='';}
   document.getElementById("lanjutkan").innerHTML = lanjutkan; document.getElementById("playlist").innerHTML = out;
    
}

userplaylist.send();



var userfollowers = new XMLHttpRequest();
  var urlfollowers = "http://api.soundcloud.com/users/"+id+"/followers?page_size=10&client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

userfollowers.open("GET", urlfollowers, true);

userfollowers.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var data = data.collection;
	var out= "";
    var i;
	for (var i = 0; i < data.length; i++) {
	if (data[i].avatar_url) {
    var gbr = '' + art300(data[i].avatar_url) + '';
} else {
    var gbr = 'https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png';
}
 
  out += ' <div class="obj"> <a href="/site-user.xhtml?to-id=' + data[i].id + '" class="link-obj"></a> <div class="img"> <img src="'+gbr+'" alt="Profile ' + data[i].username + '"> </div> <h3 class="title-singer">' + data[i].username + '</h3> </div>';

	}
  

   if(5 < i){
var lanjut='<a href="/site-user-follower.html?to-id=:to-id:" class="btn-more-text">Lebih lanjut<i class="ic"></i></a> ';
   }else{
   var lanjut='';}
   document.getElementById("kanjutkan").innerHTML = lanjut; document.getElementById("userfollowers").innerHTML = out;
    
}

userfollowers.send();


