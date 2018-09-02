var requestgenre = new XMLHttpRequest();
  var urlgenre = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=b0c8d9a1f1dbfc38e8367e985772977d&format=json&limit=20';

requestgenre.open("GET", urlgenre, true);

requestgenre.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    	var ah = data.tags.tag;
var out= "";
var genre= "";
    var i;

	for (var i = 0; i < ah.length; i++) {

        
out += '   <a href="/site-genre.html?to-genre=' + ah[i].name+ '" class="list-group-item">' + ah[i].name+ '</a>';
    }
    document.getElementById("genre").innerHTML = out;
}

requestgenre.send();



var requestrock = new XMLHttpRequest();
  var urlkpop = "https://api.soundcloud.com/tracks?genres=rock&limit=20&client_id=e6a418026e80a163d5c079afb49202c4";

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
  out += '    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">                      <div class="item">                        <div class="pos-rlt">                         <div class="bottom">                            <span class="badge bg-info m-l-sm m-b-sm">'+durasi(data[i].duration)+'</span>                          </div>                          <div class="item-overlay opacity r r-2x bg-black">                            <div class="text-info padder m-t-sm text-sm">                              <i class="fa fa-star"></i>                              <i class="fa fa-star"></i>                              <i class="fa fa-star"></i>                              <i class="fa fa-star"></i>                              <i class="fa fa-star-o text-muted"></i>                            </div>                            <div class="center text-center m-t-n">                              <a href="/site-listen.xhtml?to-id=' + data[i].id + '"><i class="icon-control-play i-2x"></i></a>                            </div>                            <div class="bottom padder m-b-sm">                              <a href="#" class="pull-right">                                <i class="fa fa-heart-o"></i>                              </a>                              <a href="#">                                <i class="fa fa-plus-circle"></i>                              </a>                           </div>                          </div>                          <a href="/site_download.xhtml?get-id=' + data[i].id + '"><img src="'+gbr+'" alt="" class="r r-2x img-full"/></a>                        </div>                        <div class="padder-v">                          <a href="/site-listen.xhtml?to-id=' + data[i].id + '" class="text-ellipsis">' + data[i].title + '</a>                          <a href="#" class="text-ellipsis text-xs text-muted">' + humanFileSize(data[i].original_content_size) + '</a>                        </div>                      </div>                    </div> ';


	}
    document.getElementById("random").innerHTML = out;

}

requestrock.send();