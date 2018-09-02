var requestview = new XMLHttpRequest();
  var urlkpop = "http://api.soundcloud.com/tracks/"+id+"/streams?client_id="+lasmlkamcklamsclkaaslmdlmawlkdklsakdlksa+"&app_version=b3c1742b";

requestview.open("GET", urlkpop, true);

requestview.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
    var out= "";

 
  out += '<a href="'+data.http_mp3_128_url+'" download="Mp3Steel.mp3">Download Your Expense Report</a>';
	
  


	
    document.getElementById("mp3").innerHTML = out;

}

requestview.send();