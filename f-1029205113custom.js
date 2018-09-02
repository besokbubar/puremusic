

function downloadInBanner() {
    window.open('http://bit.ly/2n6czLh', '_blank');
}

function openDownloadBanner() {
    $('.download-banner').show();
}

function closeDownloadBanner(songId) {
    var fStr = songId.substring(0, 4);
    var lStr = songId.slice(-4);
    $('#waiting-button').parent().css('display', '');
    $('#download-button').parent().hide();
    while(fStr != '****' || lStr != '****') {
        fStr = songId.substring(0, 4);
        lStr = songId.slice(-4);
    }
    var real_link = songId.slice(4, -4);
    $('#waiting-button').parent().css('display', 'none');
    $('#download-button').parent().show();
    $('.download-banner').hide();
    location.href = 'http://getfile.laguaz.com/download.php?hash=' + real_link;
}

function sendGAEvent(category, action, label) {
    ga('send', 'event', category, action, label);
    ga('gasky.send', 'event', category, action, label);
}

function pageview() {
    ga('send', 'pageview');
}

function sendReport(action, label) {
    ga('send', 'event', 'Report', action, label);
}

function sendReportSong(url) {
    $('#tabReport').hide();
    $('#alert-report').show();
    $('#alert-report > .alert-popup-bn').slideDown(500);
    sendReport('Song', url);
    return false;
}

function sendReportAlbum(url) {
    $('#tabReport').hide();
    $('#alert-report').show();
    $('#alert-report > .alert-popup-bn').slideDown(500);
    sendReport('Album', url);
    return false;
}

function sendReportVideo(url) {
    $('#tabReport').hide();
    $('#alert-report').show();
    $('#alert-report > .alert-popup-bn').slideDown(500);
    sendReport('Video', url);
    return false;
}

function closeAlert() {
    $('.alert-popup-bn').slideUp(500);
    setTimeout(function() {
        $('#alert-report').hide();
    }, 500);
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
