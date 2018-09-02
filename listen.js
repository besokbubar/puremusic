var requestview = new XMLHttpRequest();
  var urlkpop = "http://api.soundcloud.com/tracks/"+id+".json?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

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
  var judul="Dengar dan download lagu "+data.title+" mp3"; 
document.title= judul;
   	var entag = ""+data.title+" video, "+data.title+" download video, "+data.title+" youtube video, "+data.title+" to video, "+data.title+" video song, "+data.title+" free video, "+data.title+" video songs, "+data.title+" video free download, "+data.title+" video song download, "+data.title+" download video songs, you video, "+data.title+" video video, palco video, music video, musica video, video indir, video gratis";

var desc=document.createElement("meta");
desc.setAttribute("name", "description");
desc.setAttribute("content", ""+data.title+", "+readmore(data.description)+"");
document.getElementsByTagName('head')[0].appendChild(desc);

var key=document.createElement("meta");
key.setAttribute("name", "keywords");
key.setAttribute("content", ""+entag+"");
document.getElementsByTagName('head')[0].appendChild(key);

var link=document.createElement("link");
link.setAttribute("rel", "canonical");
link.setAttribute("href", ""+geturl+"");
document.getElementsByTagName('head')[0].appendChild(link);

var ogtitle=document.createElement("meta");
ogtitle.setAttribute("property", "og:title");
ogtitle.setAttribute("content", ""+data.title+"");
document.getElementsByTagName('head')[0].appendChild(ogtitle);

var ogtype=document.createElement("meta");
ogtype.setAttribute("property", "og:type");
ogtype.setAttribute("content", "website");
document.getElementsByTagName('head')[0].appendChild(ogtype);

var ogurl=document.createElement("meta");
ogurl.setAttribute("property", "og:url");
ogurl.setAttribute("content", ""+geturl+"");
document.getElementsByTagName('head')[0].appendChild(ogurl);


var ogdescription=document.createElement("meta");
ogdescription.setAttribute("property", "og:description");
ogdescription.setAttribute("content", "Download atau dengarkan Gratis Lagu " + data.title + " hanya untuk review saja Belilah kaset asli atau cd original dari album nya atau gunakan Nada Sambung Pribadi Sebagai bentuk apresiasi penghargaan agar mereka tetap bisa berkarya");
document.getElementsByTagName('head')[0].appendChild(ogdescription);


var ogimage=document.createElement("meta");
ogimage.setAttribute("property", "og:image");
ogimage.setAttribute("content", ""+data.artwork_url+"");
document.getElementsByTagName('head')[0].appendChild(ogimage);

var ogaudio=document.createElement("meta");
ogaudio.setAttribute("property", "og:audio");
ogaudio.setAttribute("content", "" + data.stream_url + "?client_id=e6a418026e80a163d5c079afb49202c4");
document.getElementsByTagName('head')[0].appendChild(ogaudio);

var ogaudiotype=document.createElement("meta");
ogaudiotype.setAttribute("property", "og:audio:type");
ogaudiotype.setAttribute("content", "audio/mpeg");
document.getElementsByTagName('head')[0].appendChild(ogaudiotype);

var ogduration=document.createElement("meta");
ogduration.setAttribute("property", "music:duration");
ogduration.setAttribute("content", ""+data.duration+"");
document.getElementsByTagName('head')[0].appendChild(ogduration);

 var pemutar = '        <div class="the-bg" style=""></div>                <div class="overlay-comments" title="comment clicking on bottom scrubbar"></div>                    <div id="ap1" class="audioplayer-tobe alternate-layout is-preview button-aspect-noir button-aspect-noir--filled" style="width:100%; margin-top:40px; margin-bottom: 40px;" data-thumb="' + gbr + '" data-thumb_link="' + gbr + '" data-bgimage="' + gbr + '" data-scrubbg="' + gbr + '" data-scrubprog="' + gbr + '" data-type="normal" data-source='+ data.stream_url + '?client_id='+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+'">                                          <div class="meta-artist"><span class="the-artist"><strong>' + data.user.username + '</strong></span><span class="the-name">' + data.title + '</span>                        </div>                    </div>              ';
  
  var infolagu='<div class="info-song"> <div class="main-info-song left"> <h1 class="title-main-song">' + data.title + '</h1> <div class="title-sub"> <a href="/site-user.html?to-id=' + data.user_id + '" title="' + data.user.username + '">' + data.user.username + '</a> </div> </div>  <div class="clear"></div> <span class="link-dropdown" data-action="box-info" data-target="#box-info"><i></i></span> </div> <div class="dropdown-info-song" style="display: none" id="box-info"> <table> <tbody> <tr> <td style="text-align:right"><span>Kategori:</span></td> <td> <a href="/site-genre.html?to-title=' + data.genre + '" title="' + data.genre + '">' + data.genre + '</a> </td> </tr> <tr> <td style="text-align:right"><span>Upload by:</span></td> <td>' + data.user.username + '</td> </tr> </tbody> </table> <div class="info-more-text"> <p></p> </div> <div class="singer-box-search"> <a href="/site-user.html?to-id=' + data.user_id + '" class="link-item"></a> <span class="avatar"> <img width="100%" src="' + data.user.avatar_url + '" alt="Anji"> </span> <div class="info-sbs"> <div class="title-main-sbs">' + data.user.username + '</div> </div> </div> </div> ';
  
var out='<div id="lyrics-tab" style=""> <ul class="nav nav-tabs"> <li class="tab-lyrics active"><a data-toggle="tab" href="#tab-lyrics" aria-expanded="true">Detail</a></li> <li class="tab-chord"><a data-toggle="tab" href="#tab-lyrics-chord" aria-expanded="false">Description</a></li> </ul> <div class="tab-content"> <div id="tab-lyrics" class="tab-pane fade active in"> <div class="lyric-song"> <div class="info-more-text" area="lyric"><p>  Durasi: ' + durasi(data.duration) + ' <br/>Play: ' + data.playback_count + '<br/>Size: ' + humanFileSize(data.original_content_size) + '<br/>Upload by: <a href="/site-user.html?to-id=' + data.user_id + '">' + data.user.username + '</a><br/>Added: ' + time(data.created_at) + '<br/> Play:  ' + data.playback_count + '               </p></div> </div> </div> <div id="tab-lyrics-chord" class="tab-pane fade"> <div class="lyric-song short"><div class="info-more-text" area="lyric-chord"><div class="short-lyricchord">								<b>Download atau dengarkan Gratis Lagu <u> ' + data.title + ' </u></b> hanya untuk review saja Belilah kaset asli atau cd original dari album nya atau gunakan <b><u>Nada Sambung</u></b> Pribadi Sebagai bentuk apresiasi penghargaan agar mereka tetap bisa berkarya </div></div> </div> </div> </div> </div>';
	
  
 jQuery(document).ready(function ($) {
        //return;


        var use_spectrum = 'off';

        var design_color_bg = '444444';
        var comments_enable = 'off';
        var design_color_prog = 'fa21da,fa213f';

        var skinwave_wave_mode_canvas_mode = 'normal';
        var disable_volume = 'on';


        var bar_len = 3;
        var bar_space = 1;
        var reflection_size = 0.25;

        var init_parallaxer = false;



     
     
        var str_rate = '<div class="float-left "> <div class="sharethis-inline-share-buttons" data-url="'+geturl+'"></div> </div>  ';
        var str_rate2 = '<div class="counter-likes"><i class="fa fa-heart"></i><span class="the-number">' + data.reposts_count + ' </span></div>';
        var str_views = '<div class="counter-hits"><i class="fa fa-play"></i><span class="the-number">' + data.playback_count + ' </span></div>';



        var disable_scrub = 'default';

        var skinwave_mode = 'normal';
        var skinwave_wave_mode = 'canvas';


     





        var settings_ap = {
            disable_volume: disable_volume
            ,disable_scrub: disable_scrub
            ,design_skin: 'skin-wave'
            ,skinwave_dynamicwaves:'on'
            ,skinwave_enableSpectrum:use_spectrum
            ,settings_backup_type:'full'
            ,settings_useflashplayer:'auto'
            ,skinwave_spectrummultiplier: '4'
            ,design_color_bg: design_color_bg
            ,skinwave_comments_enable:comments_enable
            ,skinwave_comments_playerid:'3'
            ,skinwave_mode: skinwave_mode
            ,autoplay: 'on'
            ,embed_code:'You can enable embed button for your viewers to embed on their site, the code will auto generate. &lt;iframe src=&quot;http://yoursite.com/bridge.php?type=gallery&amp;id=gal1&quot; &gt;&lt;/iframe&gt; <span class="copy-embed-code-btn"><i class="fa fa-clipboard"></i> Copy Embed</span> '
            ,settings_extrahtml:str_rate+str_views+str_rate2
            ,skinwave_wave_mode: skinwave_wave_mode
            ,skinwave_wave_mode_canvas_waves_number: bar_len
            ,skinwave_wave_mode_canvas_waves_padding: bar_space
            ,skinwave_wave_mode_canvas_reflection_size: reflection_size
            ,design_wave_color_progress: design_color_prog // == light or full
            ,design_animateplaypause: "on"
            ,skinwave_wave_mode_canvas_mode: skinwave_wave_mode_canvas_mode
        };
        console.info(settings_ap);
        dzsap_init('#ap1',settings_ap);


      
    });
	
    document.getElementById("pemutar").innerHTML = pemutar;
    document.getElementById("infolagu").innerHTML = infolagu;
    document.getElementById("listen").innerHTML = out;

}

requestview.send();


var comments = new XMLHttpRequest();
  var urlcomments = "http://api.soundcloud.com/tracks/"+id+"/comments?limit=10&offset=1&client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

comments.open("GET", urlcomments, true);

comments.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";
  var i;
	for (var i = 0; i < data.length; i++) {
if (data[i].user.avatar_url) {
    var gbr = '' + art300(data[i].user.avatar_url) + '';
} else {
    var gbr = 'https://lh3.googleusercontent.com/dW0LiRNhqEjj560AAW9xeIEmWG2_JuyP2v_gH7-MWTSisPL0YQ8Sf6SI750eod7i9CU=w300';
}

  out += '    <li class="list-group-item" id="comment-id-' + data[i].id + '">                              <a href="/site-user.html?to-user=' + data[i].user_id + '" class="thumb-sm pull-left m-r-sm">                                <img src="' + gbr + '" class="img-circle">                              </a>                              <a href="/site-user.html?to-user=' + data[i].user_id + '" class="clear">                                <small class="pull-right">' + time(data[i].created_at) + '</small>                                <strong class="block">' + data[i].user.username + '</strong>                                <small>' + data[i].body + '  </small>                              </a>                            </li>';
  }

	
    document.getElementById("comments").innerHTML = out;

}

comments.send();


//user tracks

var usertracks = new XMLHttpRequest();
  var urlusertracks = "http://api.soundcloud.com/users/"+user+"/tracks?limit=5&offset=1&client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"";

usertracks.open("GET", urlusertracks, true);

usertracks.onload = function () {
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
      
  out += '  <div class="obj"> <div class="obj-inside"> <a href="/site-listen.xhtml?to-id=' + data[i].id + '&to-title=' + data[i].title + '&to-user=' + data[i].user.id + '" class="link-obj"></a> <div class="img"> <img width="100%" src="'+gbr+'" alt="' + data[i].title + '"/></div> <h3 class="title-main-obj ellipsis-2">' + data[i].title + '</h3> <h4 class="title-sub ellipsis-2">' + data[i].user.username + '</h4> </div> </div> ';

  }

	
    document.getElementById("moreuser").innerHTML = out;

}

usertracks.send();

//end 
//related from youtube

var related = new XMLHttpRequest();
 var urlrelated = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q="+judul+"&maxResults=6&order=relevance&key="+askmdkmsadjksadmksadmksadkjsadihicascnkasjdnkjah+"";

related.open("GET", urlrelated, true);

related.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ohtidak = data.items;
    var out= "";
    var i;

	for (var i = 0; i < ohtidak.length; i++) {
  out+='<div class="obj"> <div class="obj-inside"> <a href="/site-watch.html?to-id=' + ohtidak[i].id.videoId + '&to-channel=' + ohtidak[i].snippet.channelId + '" class="link-obj"></a> <div class="img"> <img width="100%" src="' + ohtidak[i].snippet.thumbnails.high.url + '" alt="' + gantijudul(ohtidak[i].snippet.title) + '"></div> <h3 class="title-main-obj ellipsis-2">' + gantijudul(ohtidak[i].snippet.title) + '</h3> 	  <h4 class="title-sub title-singer ellipsis-2">' + ohtidak[i].snippet.channelTitle + '</h4> </div> </div>';	
	}
document.getElementById("relatedvideo").innerHTML = out;

}

related.send();




