var requestopartist = new XMLHttpRequest();
  var urltopartist = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&limit=15&page='+page+'&format=json';

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
  

var balik=page-1;
  var lanjut=balik+2;


  if (balik > 0) {
    var prevv='<a href="/site-top-artist.html?to-page='+balik+'" class="arr-left"><i class="ic icr-left"></i></a>'; }else{ 
    var prevv='';}
  var nextt='<a href="/site-top-artist.html?to-page='+lanjut+'" class="arr-right"><i class="ic icr-right"></i></a> ';
  	var pagingg=''+prevv+' <span>Page '+page+'</span> '+nextt+'';

document.getElementById("pagingg").innerHTML = pagingg;
  
    document.getElementById("topartist").innerHTML = out;

}
  requestopartist.send();



var requestoptrack = new XMLHttpRequest();
  var urltoptrack = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&limit=20&page='+page+'&format=json';

requestoptrack.open("GET", urltoptrack, true);

requestoptrack.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.tracks.track;
var out= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

        
out += ' <div class="wrap-obj"> <div class="obj w50 nonpr first">  <div class="obj-inside"> <a class="link-obj" href="/site-search.html?to-q=' + ah[i].artist.name+' ' + ah[i].name+ '" alt="' + ah[i].name+ '"></a>';
        out += "<div class='img'> <img src='" + findUrl(ah[i].image, "large") + "' alt='" + ah[i].artist.name+" " + ah[i].name+ "'> </div> ";

out += '  <div class="table-cell"> <h2 class="title-main-obj ellipsis-2">' + ah[i].name+ '</h2> <h3 class="title-sub">' + ah[i].artist.name+'</h3>  </div> </div> </div> </div> ';
	}
  
  
var balik=page-1;
  var lanjut=balik+2;


  if (balik > 0) {
    var prev='<a href="/site-top-tracks.html?to-page='+balik+'" class="arr-left"><i class="ic icr-left"></i></a>'; }else{ 
    var prev='';}
  var next='<a href="/site-top-tracks.html?to-page='+lanjut+'" class="arr-right"><i class="ic icr-right"></i></a> ';
  	var paging=''+prev+' <span>Page '+page+'</span> '+next+'';

document.getElementById("paging").innerHTML = paging;
    document.getElementById("toptrack").innerHTML = out;

}

requestoptrack.send();

var requestgenre = new XMLHttpRequest();
  var urlgenre = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key='+aslkmlkasmdlkasjdlksalcmlaksjlkasdlkjasd+'&format=json&limit=10';

requestgenre.open("GET", urlgenre, true);

requestgenre.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.tags.tag;
var out= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

        
out += '<div class="item"><a href="/site_genre.xhtml?get-genre=' + ah[i].name+ '">' + ah[i].name+ '</a></div>';
	}
    document.getElementById("genre").innerHTML = out;

}

requestgenre.send();