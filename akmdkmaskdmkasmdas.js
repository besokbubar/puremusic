function mheader_js(){

   document.write('<script src="http://unduhmp3.jw.lt/newmusic/js/m/f-1029205113custom.js"></script><script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f451250957iscroll.js"></script> <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f906250189jquery.js"></script> ');
  
   

}
function mfooter_js(){
document.write('  <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f-42755364jquery-ui.min.js"></script> <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f-186248311jquery.ui.touch-punch.min.js"></script> <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f-775764537slick.min.js"></script>  <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f-47978900jquery.jplayer.min.js"></script>  <script type="text/javascript" src="http://unduhmp3.jw.lt/newmusic/js/m/f-1790039225common.min.1.js"></script>  <script src="http://unduhmp3.jw.lt/newmusic/js/m/f1597738511jquery.cookie.js"></script> ');
  
    $(document).ready(function(){ $('.main-banner').show(); var dis_banner = $.cookie('dis_banner'); var close_banner = $.cookie('close_banner'); if (typeof close_banner === 'undefined') { close_banner = 0; } if (typeof dis_banner === 'undefined') { dis_banner = null; } console.log(dis_banner); console.log(close_banner); if (dis_banner === null && close_banner < 3) { $.cookie('dis_banner', 1, { expires: 1, path: '/' }); $('#popup-bn').css('display', 'block'); } else { $('#popup-bn').css('display', 'none'); $('#gift_box').css('display', 'block'); } $('#close-popup-bn').click(function() { $('#popup-bn').css('display', 'none'); $('#gift_box').css('display', 'block'); $.cookie('close_banner', parseInt(close_banner) + 1, { expires: 365, path: '/' }); }); var click_gift_box = false; $('#gift_box').click(function() { click_gift_box = true; $('#popup-bn').css('display', 'block'); $('#gift_box').css('display', 'none'); $.cookie('close_banner', parseInt(close_banner) - 1, { expires: 365, path: '/' }); }); $(document).click(function() { if (click_gift_box === false) { $('#popup-bn').css('display', 'none'); $('#gift_box').css('display', 'block'); $.cookie('close_banner', parseInt(close_banner) + 1, { expires: 365, path: '/' }); } click_gift_box = false; }); }); 
  $(document).ready(function() { setTimeout(function(){ $(".popup.chord").click(function(e) { $('.popuptext').removeClass('show'); $(this).children('.popuptext').toggleClass('show'); e.stopPropagation(); }); $(document).click(function() { $('.popuptext').removeClass('show'); }); $('.popuptext').click(function() { $(this).removeClass('show'); return false; }); }, 5000); setTimeout(function(){ $('#tab-lyrics').addClass('active'); $('.tab-lyrics').addClass('active'); $('#tab-lyrics-chord').removeClass('active'); $('.tab-chord').removeClass('active'); }, 5000); setTimeout(function(){ $('#lyrics-tab').show(); }, 5000); }); 
      $(document).ready(function(){ }); 
}
function ats(){

if( isMobile.any() ) {
document.write('<link rel="stylesheet" type="text/css" href="http://unduhmp3.jw.lt/newmusic/css/layout.css" /><link rel="stylesheet" type="text/css" href="http://unduhmp3.jw.lt/newmusic/css/fixed.css" /><style type="text/css">.web{display:none;}</style>');
 mheader_js();
   var GLOBAL = { ACCOUNT_ID: 0, ACCOUNT_NAME: '', DISPLAY_NAME: '', BASE_URL: 'http://puremusic.ooo', IMG_URL: 'http://puremusic.ooo', SKIN_URL:'/skins', LOG_INFO: '', IEVERSION: 9 }; window.___gcfg = { lang: 'vi' }; function setCookie(c_name, value, exdays) { var exdate = new Date(); exdate.setDate(exdate.getDate() + exdays); var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString()) + ";domain=.puremusic.ooo;path=/"; document.cookie = c_name + "=" + c_value; } function getCookie(c_name) { var i, x, y, cks = document.cookie.split(";"); for (i = 0; i < cks.length; i++) { x = cks[i].substr(0, cks[i].indexOf("=")); y = cks[i].substr(cks[i].indexOf("=") + 1); x = x.replace(/^\s+|\s+$/g, ""); if (x == c_name) { return unescape(y); } } return null; } function getParameterByName(name, url) { if (!url) url = window.location.href; name = name.toLowerCase(); url = url.toLowerCase(); name = name.replace(/[\[\]]/g, "\\$&"); var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, " ")); } var Browser = { getFlashVersion: function() { var version = 0, flash; if (window.ActiveXObject) { try { flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); if (flash) { var v = flash.GetVariable("$version"); if (v) { v = v.split(" ")[1].split(","); version = parseInt(v[0], 10) + "." + parseInt(v[1], 10); } } } catch (e) {} } else if (navigator.plugins && navigator.mimeTypes.length > 0) { flash = navigator.plugins["Shockwave Flash"]; if (flash) { version = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"); } } /*Converts to a number*/ return version * 1; }, detectBrowser: function() { var type = 0; var userAgent = navigator.userAgent; switch (true) { /* Symbian 3 */ case (userAgent.search(/Symbian\/3/gi) > -1): type = 2; break; /* midp compatible */ case userAgent.indexOf('MIDP') > -1: type = 1; break; /* opera mini */ case userAgent.indexOf('Opera Mini') > -1: type = 1; break; /* MAUI */ case userAgent.indexOf('MAUI') > -1: type = 1; break; /* mobile safari */ case userAgent.search(/Mobile.*Safari/gi) > -1: GLOBAL.IS_PC = 0; if (userAgent.indexOf('iPad') > -1) { setCookie('IS_NOT_PC', '1', 2); type = 0; } else { type = 2; } break; /* Iphone */ case userAgent.indexOf('iPhone') > -1: type = 2; break; /* Ipod */ case userAgent.indexOf('iPod') > -1: type = 2; break; /* Android */ case userAgent.indexOf('Android') > -1: type = 2; break; /* Samsung */ case userAgent.indexOf('samsung') > -1: type = 1; break; /* LG */ case userAgent.indexOf('LG') > -1: type = 1; break; /* Motorola */ case userAgent.indexOf('MOT') > -1: type = 1; break; /* Motorola */ case userAgent.indexOf('MOTOROLA') > -1: type = 1; break; /* BlackBerry compatible */ case userAgent.indexOf('BlackBerry') > -1: type = 1; break; /* Nokia */ case userAgent.indexOf('Nokia') > -1: /* IEMobile compatible */ case userAgent.indexOf('IEMobile') > -1: type = 1; if (userAgent.indexOf('Windows Phone') > -1) { type = 2; } break; /* HTC */ case userAgent.indexOf('HTC') > -1: type = 1; break; default: type = 0; break; } return type; } }; var type = Browser.detectBrowser(); if (type > 0) { GLOBAL.IS_PC = 0; } if (GLOBAL.IS_PC) { document.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1" />'); } var domain, uri = ''; uri = location.pathname + location.search; if (getParameterByName('redirect_force') === 'true') { setCookie('IS_MOBILE', '0', 2); type = 0; } if (type > 0 && (getCookie('IS_MOBILE') == null || parseInt(getCookie('IS_MOBILE')) != 0)) { switch (type) { case 2: domain = 'http://m.laguaz.net'; break; case 1: domain = 'http://laguaz.net'; break; } if (domain != 'http://m.laguaz.net') { location.href = domain + uri; } } (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-82277650-1', 'auto'); ga('create', 'UA-82133735-1', 'auto', {'name': 'gasky'}); ga('send', 'pageview'); ga('gasky.send', 'pageview');
 var MP3 = { MP3_URL: "f-2133724448songs", VIP: false, IMG_URL: "f0", USER_ZALO: parseInt(""), USER_ID: parseInt(""), USER_NAME: "", USER_DISPLAY: "", BANNER_OFF: true, OVA_DISABLE: true, LOG_DATA: "" }; 
   
} else{
document.write(' <style type="text/css">.wap{display:none;}</style>');

}

}
  
  function bawah(){
    if( isMobile.any() ) {
     mfooter_js();

$("#toggle_genres_category").click(function () { $("#genres_category").toggle(); }); 


// var disPopup = getCookie('__dis_popup'); // if (!disPopup) { // /* if (navigator.platform.indexOf("inux armv") >= 0 || navigator.platform.indexOf("android") >= 0) { */ // $('body').addClass('no-fixed'); // $('#fn-popup-android').removeClass('none'); // /* } */ // } // $('.fn-close-box').on('click', function () { // $($(this).attr('close-box')).remove(); // $('body').removeClass('no-fixed'); // setCookie('__dis_popup', true); // return false; // }); 

    }else{
    
    
    }
    
    
  }


