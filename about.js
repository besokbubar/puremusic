var profile = new XMLHttpRequest();
  var urlprofile = "http://api.soundcloud.com/users/"+id+"?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

profile.open("GET", urlprofile, true);

profile.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
  
  var judul="Profile About "+data.username+""; 
document.title= judul;
if (data.avatar_url) {
    var gbr = '' + ganti(data.avatar_url) + '';
} else {
    var gbr = 'https://lh3.googleusercontent.com/dW0LiRNhqEjj560AAW9xeIEmWG2_JuyP2v_gH7-MWTSisPL0YQ8Sf6SI750eod7i9CU=w300';
}
 out += '  <div class="artist-header" style="background-image:url('+gbr+')"> <div class="artist-header-inside"> <h1>'+data.username+'</h1> <p class="counter-follower" area="follow-total">'+data.followings_count+'</p> <div class="artist-header-menu"> <ul class="clearfix"> <li><a href="/site-user.html?to-id='+data.id+'">Semua</a> </li>  <li> <a class="active" href="">Tentang</a> </li><li> <a href="/site-user-music.html?to-id='+data.id+'">Lagu</a> </li> <li> <a href="/site-user-followers.html?to-id='+data.id+'>Followers</a> </li> <li> <a href="/site-user-playlist.html?to-id='+data.id+'">Playlist</a> </li> </ul> </div> </div> </div> <div class="artist-bio"> <p class="align-justify ellipsis-3">'+nl2br(data.description)+'</p> </div></div> ';

  document.getElementById("about").innerHTML = out;

}

profile.send();
