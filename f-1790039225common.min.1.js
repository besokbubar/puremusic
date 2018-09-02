var zing = {};
var DEBUG = false;
var flatform = {IOS: 1, ANDROID: 2, UNKNOWN: 0};
var OS = flatform.UNKNOWN;
$.fn.mobileFix = function (options) {
    var $parent = $(this);
    $(document).on("focus", options.inputElements, function (e) {
        $parent.addClass(options.addClass);
    }).on("blur", options.inputElements, function (e) {
        $parent.removeClass(options.addClass);
        setTimeout(function () {
            $(this).focus();
            $(document).scrollTop($(document).scrollTop());
        }, 1);
    });
    return this;
};
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        OS = flatform.IOS;
    } else {
        if (userAgent.match(/Android/i)) {
            OS = flatform.ANDROID;
        } else {
            OS = flatform.UNKNOWN;
        }
    }
}
getMobileOperatingSystem();
// function displayOverlayAdverting() {
//     if (window.AdtimaMp3Wap) {
//         window.AdtimaMp3Wap.renderOverlay();
//         if (window.AdtimaMp3Wap.checkOverlay()) {
//             var $ads = $("#Mp3_Wap_Overlay");
//             if ($ads.html() != "") {
//                 $ads.show();
//                 $ads.append('<a class="ic ic-close"></a>');
//                 $ads.find(".ic-close").click(function () {
//                     $ads.empty().hide();
//                 });
//                 setTimeout(function () {
//                     $ads.empty().hide();
//                 }, 2E4);
//             }
//         }
//     }
// }
String.prototype.format = function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var replacement = "{" + i + "}";
        content = content.replace(replacement, arguments[i]);
    }
    return content;
};
Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
};
function processJson(url, data, callback, errorCallback) {
    if (DEBUG) {
        console.log("ajax url: ", url);
    }
    if (DEBUG) {
        console.log("ajax data: ", data);
    }
    $.ajax({
        url: url, data: data, dataType: "json", success: function (resp) {
            if (DEBUG) {
                console.log("ajax resp: ", resp);
            }
            if (resp instanceof Object) {
                if (callback instanceof Function) {
                    callback(resp);
                }
            }
        }, error: function (xhr, status) {
            if (DEBUG) {
                console.log("ajax status: ", status);
            }
            if (zing.debug) {
                debugScreen(JSON.stringify(xhr) + "||| Status: " + status);
            }
            if (errorCallback instanceof Function) {
                errorCallback(xhr, status);
            }
        }
    });
}
function crossJson(url, data, callback) {
    if (DEBUG) {
        console.log("ajax url: ", url);
    }
    if (DEBUG) {
        console.log("ajax data: ", data);
    }
    $.ajax({
        url: url, data: data, dataType: "jsonp", success: function (resp) {
            if (DEBUG) {
                console.log("ajax resp: ", resp);
            }
            if (resp instanceof Object) {
                if (callback instanceof Function) {
                    callback(resp);
                }
            }
        }, error: function (xhr, status) {
            if (zing.debug) {
                debugScreen(JSON.stringify(xhr) + "||| Status: " + status);
            }
        }
    });
}
function _formatTime(seconds) {
    seconds = Math.abs(seconds);
    seconds = Math.round(seconds);
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return (minutes >= 10 ? minutes : "0" + minutes) + ":" + (seconds >= 10 ? seconds : "0" + seconds);
}
function fA(element, thumb, uname, dname) {
    var $el = $(element);
    if ($el.size()) {
        if ($el.find("[area=thumb]").size()) {
            $el.find("[area=thumb]").attr("src", thumb).attr("alt", dname);
        }
        if ($el.find("[area=uname]").size()) {
            $el.find("[area=uname]").html(dname);
        }
    }
}
function loadScript(c, d) {
    var b = c.indexOf("http") > -1 ? c : "f1866804144zmp3-v4.1" + c;
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.charset = "utf-8";
    if (typeof d === "function") {
        if (a.readyState) {
            a.onreadystatechange = function () {
                if (a.readyState === "loaded" || a.readyState === "complete") {
                    a.onreadystatechange = null;
                    d();
                }
            };
        } else {
            a.onload = function () {
                d();
            };
        }
    }
    a.src = b;
    document.getElementsByTagName("head")[0].appendChild(a);
}
function centerModal() {
    var $dialog = $(this).find(".modal-content");
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}
var accentsTidy = function (s) {
    var r = s;
    r = r.replace(/[áàạảãâấầậẩẫăắằặẳẵäå]/g, "a");
    r = r.replace(/[ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ]/g, "A");
    r = r.replace(/[đ]/g, "d");
    r = r.replace(/[Đ]/g, "D");
    r = r.replace(/æ/g, "ae");
    r = r.replace(/ç/g, "c");
    r = r.replace(/[éèẹẻẽêếềệểễë]/g, "e");
    r = r.replace(/[ÉÈẸẺẼÊẾỀỆỂỄ]/g, "E");
    r = r.replace(/[ìíîïịĩíỉ]/g, "i");
    r = r.replace(/[ÌÍĨỊỈ]/g, "i");
    r = r.replace(/ñ/g, "n");
    r = r.replace(/[óòọỏõôốồộổỗơớờợởỡö]/g, "o");
    r = r.replace(/[ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ]/g, "O");
    r = r.replace(/œ/g, "oe");
    r = r.replace(/[úùụủũưứừựửữü]/g, "u");
    r = r.replace(/[ÚÙỤỦŨƯỨỪỰỬỮ]/g, "U");
    r = r.replace(/[ýỳỵỷỹÿ]/g, "y");
    r = r.replace(/[ÝỲỴỶỸ]/g, "Y");
    r = r.replace(/\s{2,}/g, "-");
    r = r.replace(/\W/g, "-");
    return r;
};
function IS_MOBILE() {
    var name = "IS_MOBILE";
    var value = 0;
    var _days = 365 * 2;
    var date = new Date;
    date.setTime(date.getTime() + _days * 24 * 60 * 60 * 1E3);
    var expires = "; expires=" + date["toGMTString"]();
    document.cookie = name + "=" + window["escape"](value) + expires + "; path=/";
}
function SESSIONID() {
    var nameEQ = "__mp3sessid" + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return window["unescape"](c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}
zing.store = function () {
    var _S = {};
    var _local = false;
    if (window.localStorage) {
        _local = true;
    }
    var _adapter = function () {
        var _storage = {};
        _storage.set = function (name, value) {
            if (_local == true) {
                window.localStorage.setItem(name, value);
            }
        };
        _storage.get = function (name) {
            if (_local == true) {
                return window.localStorage.getItem(name);
            }
            return null;
        };
        _storage.remove = function (name) {
            if (_local == true) {
                window.localStorage.removeItem(name);
            }
        };
        return _storage;
    }();
    _S.set = function (key, value) {
        _adapter.set(key, value);
    };
    _S.get = function (key) {
        return _adapter.get(key);
    };
    _S.remove = function (key) {
        _adapter.remove(key);
    };
    return _S;
}();
zing.history = function () {
    var max = 50;
    var data = [];
    var _H = {};
    var key = "history";

    function init() {
        var temp = zing.store.get(key);
        if (temp) {
            data = temp.split("||");
        }
    }

    _H.add = function (keyword) {
        var _pos = -1;
        keyword = keyword.toLowerCase();

        // Send GA Event search
        sendGAEvent('Search', 'Search Full', keyword);

        if (data.length > 0) {
            for (var i in data) {
                if (data[i] == keyword) {
                    _pos = parseInt(i);
                    break;
                }
            }
        }
        if (_pos >= 0) {
            data.splice(_pos, 1);
        }
        if (data.length < max) {
            data.unshift(keyword);
        } else {
            data.splice(max - 1, 1);
            data.unshift(keyword);
        }
        zing.store.set(key, data.join("||"));
    };
    _H.list = function () {
        return data;
    };
    _H.debug = function () {
        console.log("data:", data);
        console.log("max:", max);
    };
    _H.clear = function () {
        data = [];
        zing.store.remove(key);
    };
    _H.toAreaSearch = function () {
    };
    init();
    return _H;
}();
// zing.log = {};
// zing.log.init = function () {
//     $.ajax({url: "f265147128index", dataType: "jsonp"});
// };
// zing.log.get = function (data) {
//     if (data) {
//         $.ajax({url: "f-1938681710mp3log", data: {"data": data}, dataType: "jsonp"});
//     }
// };
zing.lyric = function () {
    var pos = 0, on = true, lines = [], subs = null;
    var _L = {};

    function minSearch(arr, timer) {
        if (!arr) {
            return 0;
        }
        var minIndex = 0;
        var maxIndex = arr.length - 1;
        var currentIndex;
        var current;
        var resultIndex;
        while (minIndex <= maxIndex) {
            resultIndex = currentIndex = (minIndex + maxIndex) / 2 | 0;
            current = arr[currentIndex];
            if (current < timer) {
                minIndex = currentIndex + 1;
            } else {
                if (current > timer) {
                    maxIndex = currentIndex - 1;
                } else {
                    return currentIndex;
                }
            }
        }
        return maxIndex;
    }

    _L.createItems = function () {
        var lC = $("div[role=lyric]");
        if (lC.find(".fn-item").size() < 2) {
            lC.empty();
            lC.append($("<p>").addClass("fn-item")).append("<br />").append($("<p>").addClass("fn-item"));
        }
        lines.push($(lC.find(".fn-item").get(0)));
        lines.push($(lC.find(".fn-item").get(1)));
    };
    _L.lineDisplay = function (line, str) {
        lines[line].empty().append(str).append($("<span>").css("width", "0%").html(str));
    };
    _L.debug = function () {
        console.log(subs);
    };
    _L.load = function (lrcStr) {
        if (!lrcStr) {
            this.reset();
        }
        var arr = lrcStr.split(/\r\n|\r|\n/);
        var lrcTime = [];
        var lrcContent = [];
        $.each(arr, function (idx, row) {
            var time = row.match(/^\[(\d{2}):(\d{2})\.(\d{2})\](.*)$/);
            if (time && time.length === 5) {
                var sec = 0;
                sec = Number(time[1]) * 60 + Number(time[2]) + Number(time[3]) / 100;
                sec -= .3;
                lrcTime.push(sec);
                lrcContent.push(time[4].replace(/\[.+]/, ""));
            }
        });
        for (var i = 0; i < lrcTime.length; i++) {
            for (var x = 0; x < lrcTime.length; x++) {
                if (lrcTime[i] < lrcTime[x]) {
                    var t = lrcTime[x];
                    lrcTime[x] = lrcTime[i];
                    lrcTime[i] = t;
                    var c = lrcContent[x];
                    lrcContent[x] = lrcContent[i];
                    lrcContent[i] = c;
                }
            }
        }

        for (var i = 0; i < lrcContent.length; i++) {
            lrcContent[i] = lrcContent[i].replace("Bài Hát:", "").replace("Bài hát:", "").replace("Ca Sĩ:", "").replace("Ca sĩ:", "");
        }

        if (lrcTime.length) {
            subs = {};
            subs.times = lrcTime;
            subs.contents = lrcContent;
        }
    };
    _L.reset = function () {
        subs = null;
        pos = 0;
        for (var i in lines) {
            lines[i].empty();
        }
    };
    _L.sync = function (s) {
        if (!subs) {
            return;
        }
        console.log("sync lyric...", s);
        for (var i in lines) {
            lines[i].empty();
        }
        pos = minSearch(subs.times, s);
        this.display(s);
    };
    _L.display = function (time) {
        if (!subs) {
            return;
        }
        if (time >= subs.times[pos]) {
            if (pos === 0) {
                this.lineDisplay(pos % 2, subs.contents[pos]);
            }
            var tTransition = pos > 0 ? subs.times[pos + 1] - subs.times[pos] : subs.times[pos] - 0;
            tTransition -= .5;
            lines[pos % 2].addClass("current").find("span").css("transition", "all " + tTransition + "s linear").css({width: "100%"});
            lines[(pos + 1) % 2].removeClass("current").find("span").css("width", "0%");
            this.lineDisplay((pos + 1) % 2, subs.contents[pos + 1]);
            pos++;
        }
    };
    _L.on = function () {
        return on;
    };
    _L.debug = function () {
        console.log("lines", lines);
        console.log("subs", subs);
    };
    return _L;
}();
zing.me = {size: 120, uid: [], elId: [], listId: [], listUname: []};
zing.me.renderZMEAvatar = function () {
    var self = this;
    var zingmes = $(".zme");
    zingmes.each(function () {
        var uid = parseInt($(this).attr("uid"));
        var uname = $(this).attr("uname");
        var ref = $(this).attr("ref");
        var size = $(this).attr("uid");
        if (size) {
            self.size = parseInt(size);
        }
        var elRef;
        if (uid && uid > 0) {
            elRef = ref ? ref : ".zme[uid=" + uid + "]";
            self.listId.push(uid + "?" + elRef);
        }
        if (uname && uname.length > 2) {
            elRef = ref ? ref : ".zme[uname='" + uname + "']";
            self.listUname.push(uname + "?" + elRef);
        }
    });
    if (this.listId.length || this.listUname.length) {
        var url = "f-1984453996widget" + this.size + "&displaylist=&displaylist_ex=&ava_list=" + this.listUname.join("|,") + "&ava_list_id=" + this.listId.join("|,");
        loadScript(url);
        this.listId = [];
        this.listUname = [];
    }
};
zing.comment = {
    post_url: "f2026162889add-v4",
    url: "f439638164get-list",
    setting: null
};
zing.comment.init = function (options) {
    if (!this.setting) {
        this.setting = {};
    }
    $.extend(this.setting, options);
    this.load();
};
zing.comment.post = function (element) {
    var comment_post_url = this.post_url;
    zing.login(function () {
        var dt = $(element).data();
        if (dt.id && dt.type) {
            var comment = $(element).parent().find("[area=comment-post]").val();
            if (comment.length < 50) {
                zing.box.close();
                zing.box.message.open("Nội dung bình luận cần ít nhất 50 ký tự.", true);
            } else {
                $.ajax({
                    type: "POST",
                    url: comment_post_url,
                    dataType: "jsonp",
                    data: {content: comment, id: dt.id, type: dt.type},
                    success: function (resp) {
                        if (resp instanceof Object && resp.msg) {
                            $(element).parent().find("[area=comment-post]").val("");
                            zing.box.close();
                            if (resp.is_error == 0) {
                                zing.box.message.open("Cảm ơn bạn đã gửi bình luận, bình luận của bạn sẽ được kiểm duyệt trước khi hiển thị", resp.is_error);
                            } else {
                                zing.box.message.open(resp.msg, resp.is_error);
                            }
                        }
                    },
                    error: function (xhr, status) {
                        zing.box.close();
                        zing.box.message.open("Hệ thống quá tải vui lòng liên hệ ban quản trị.", true);
                    }
                });
            }
        }
    });
};
zing.comment.start = function () {
    if ($("div[area=comment]").size()) {
        var options = $("div[area=comment]").data();
        var req = {op: "get", type: options.type, id: options.id, page: 1, length: 10};
        if (zing.comment) {
            zing.comment.init(req);
        }
    }
    if ($("[data-action=post-comment]").size()) {
        $("[data-action=post-comment]").click(function () {
            zing.comment.post(this);
        });
    }
};
zing.comment.load = function () {
    var req = this.setting;
    crossJson(this.url, req, function (resp) {
        if (resp instanceof Object) {
            zing.comment.toScreen(resp);
        }
    });
};
zing.comment.toScreen = function (reponse) {
    var options = this.setting;
    var area = $("div[area=comment]");
    if (!area.size()) {
        return;
    }
    function row(obj) {
        var $div = $("<div>").addClass("obj").addClass("zme").attr("uid", obj.ownerId).append('<span class="img"><img area="thumb" height="32px" width="32px" src="' + MP3.IMG_URL + '/images/error_img.png" alt="Zing Mp3"></span>').append('<div class="desc-obj"><h5 area="uname" class="title-main-obj">' + obj.ownerId + '</h5><p class="desc-more">' + obj.content + "</p></div>");
        return $div;
    }

    function page(total) {
        var $pagination = $("<div>").addClass("pagination");
        area.append($pagination);
        var $ul = $("<div>").addClass("clearfix");
        $pagination.append($ul);
        var tPage = Math.ceil(total / options.length);
        if (tPage > 20) {
            tPage = 20;
        }
        if (tPage > 5 && options.page > 1) {
            $ul.append('<li class="first" onclick="zing.comment.page(1)"><a>«</a></li>');
        }
        var from = 1;
        var to = 1;
        var range = 2;
        if (options.page - range <= 1) {
            from = 1;
            to = tPage;
            if (to > 5) {
                to = 5;
            }
        } else {
            if (options.page >= tPage - 2) {
                to = tPage;
                from = tPage - range * 2;
                if (from < 1) {
                    from = 1;
                }
            } else {
                from = options.page - 2;
                to = options.page + 2;
            }
        }
        for (var i = from; i <= to; i++) {
            $ul.append("<li " + (i === options.page ? 'class="active"' : "") + ' onclick="zing.comment.page(' + i + ')"><a>' + i + "</a></li>");
        }
        if (tPage > 5 && options.page < tPage) {
            $ul.append('<li class="last" onclick="zing.comment.page(' + tPage + ')"><a>»</a></li>');
        }
        zing.me.renderZMEAvatar();
    }

    if (reponse.data && reponse.data.length) {
        area.empty();
        for (var i in reponse.data) {
            area.append(row(reponse.data[i]));
        }
        page(reponse.total);
        $("[area=comment-total]").html("• " + reponse.total);
    }
};
zing.comment.page = function (page) {
    this.setting.page = page;
    this.load();
};
zing.realtime = {type: "song"};
zing.realtime.init = function (options) {
};
zing.box = {
    close: function () {
        for (var i in zing.box) {
            if (zing.box[i] instanceof Object) {
                if (zing.box[i].status === true) {
                    if (zing.box[i].close instanceof Function) {
                        zing.box[i].close();
                    }
                }
            }
        }
    }
};
zing.box.playlist = {
    element: null, status: false, withTemplate: function () {
        return zing.box.template({
            inside: "popup-add-playlist",
            title: "Thêm vào playlist",
            ul: "list-pl",
            addPlaylist: true
        });
    }, open: function () {
        zing.box.close();
        if (!this.element) {
            this.element = this.withTemplate();
            $("body").append(this.element);
            zing.role.modal();
        }
        this.status = true;
        this.element.show();
    }, close: function () {
        this.status = false;
        this.element.hide();
    }, content: function (ct) {
        this.element.find("[area=content]").html(ct);
        var $dialog = this.element.find(".modal-content");
        var offset = ($(window).height() - $dialog.height()) / 2;
        $dialog.css("margin-top", offset);
        this.element.find(".fav-song").click(function (event) {
            event.preventDefault();
            zing.user.song.like();
        });
        this.element.find(".add-playlist").click(function (event) {
            event.preventDefault();
            zing.box.createPlaylist.open();
        });
        this.element.find(".to-playlist").click(function (event) {
            event.preventDefault();
            zing.user.song.toPlaylist(this);
        });
    }
};
zing.box.template = function (options) {
    var $inside = $("<div>").addClass("body-inside").append($("<a>").addClass("close").attr("data-dismiss", "modal").attr("aria-label", "Close"));
    if (options.inside) {
        $inside.addClass(options.inside);
    }
    if (options.title) {
        if (options.titleClz) {
            $inside.append($("<p>").addClass(options.titleClz).html(options.title));
        } else {
            $inside.append($("<p>").addClass("title-popup").html(options.title));
        }
    }
    if (options.div) {
        $inside.append($("<div>").addClass(options.div).addClass("clearfix").attr("area", "content"));
    }
    if (options.ul) {
        $inside.append($("<ul>").addClass(options.ul).addClass("clearfix").attr("area", "content"));
    }
    if (options.addPlaylist) {
        $inside.append('<div class="wrap-btn"><a onclick="zing.box.close()" class="btn-popup">Huỷ bỏ</a></wrap-btn>');
    }
    var $div = $("<div>").addClass("z-modal").append($("<div>").addClass("dialog").append($("<div>").addClass("modal-content").addClass(options.black ? options.black : "").append($("<div>").addClass("modal-body").append($inside))));
    return $div;
};
zing.box.login = {
    status: false, script: false, element: null, withTemplate: function () {
        return zing.box.template({
            inside: "popup-login",
            titleClz: "lstitle-popup",
            title: "Đăng nhập",
            div: "inside-popup"
        });
    }, open: function () {
        zing.box.close();
        if (!this.element) {
            this.element = this.withTemplate();
            $("body").append(this.element);
            zing.role.modal();
        }
        if (!this.script) {
            var self = this;
            processJson("/json/login.json", null, function (resp) {
                if (resp instanceof Object && resp.error === 0) {
                    $.getScript(resp.js);
                    self.content(resp.content);
                    self.status = true;
                    self.element.show();
                    self.element.find(".fn-msg").hide();
                }
            });
        } else {
            this.element.show();
        }
    }, close: function () {
        this.status = false;
        this.element.hide();
    }, content: function (data) {
        this.element.find("[area=content]").html(data);
    }
};
var shareLink = [{
    uri: "https://www.facebook.com/sharer/sharer.php?u={0}",
    name: "Facebook",
    clz: "ic-social-fb"
}, {
    uri: "https://plus.google.com/share?url={0}",
    name: "Google +",
    clz: "ic-social-gg"
}, {uri: "mailto:?subject=Laguaz&body={0}", name: "Email", clz: "ic-social-email"}];
if (OS == flatform.IOS) {
    shareLink = [{
        uri: "zaloshareext://shareext?type=8&version=1&schema=sample://&appname=Zing MP3&url={0}",
        name: "Gửi cho bạn bè",
        clz: "ic-send-zalo"
    }, {
        uri: "zaloshareext://shareext?type=9&version=1&schema=sample://&appname=Zing MP3&url={0}",
        name: "Đăng lên Zalo",
        clz: "ic-send-friend"
    }, {
        uri: "https://www.facebook.com/sharer/sharer.php?u={0}",
        name: "Facebook",
        clz: "ic-social-fb"
    }, {uri: "https://plus.google.com/share?url={0}", name: "Google +", clz: "ic-social-gg"}, {
        uri: "mailto:?subject=Laguaz&body={0}",
        name: "Email", clz: "ic-social-email"
    }];
} else {
    if (OS == flatform.ANDROID) {
        shareLink = [{
            uri: "intent://zaloapp.com/#Intent;action=com.zing.zalo.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=Zing MP3;S.android.intent.extra.TEXT={0};end",
            name: "Gửi cho bạn bè",
            clz: "ic-send-zalo"
        }, {
            uri: "intent://zaloapp.com/#Intent;action=com.zing.zalo.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=Zing MP3;S.android.intent.extra.TEXT={0};B.postFeed=true;end",
            name: "Đăng lên Zalo",
            clz: "ic-send-friend"
        }, {
            uri: "https://www.facebook.com/sharer/sharer.php?u={0}",
            name: "Facebook", clz: "ic-social-fb"
        }, {
            uri: "https://plus.google.com/share?url={0}",
            name: "Google +",
            clz: "ic-social-gg"
        }, {uri: "mailto:?subject=Laguaz MP3&body={0}", name: "Email", clz: "ic-social-email"}];
    }
}
zing.box.share = {
    shares: shareLink, element: null, status: false, withTemplate: function () {
        return zing.box.template({inside: "popup-share", title: "Chia sẻ", ul: "list-social"});
    }, open: function (url) {
        zing.box.close();
        if (!this.element) {
            this.element = this.withTemplate();
            $("body").append(this.element);
            zing.role.modal();
        }
        var $ul = this.element.find("[area=content]").empty();
        for (var i in this.shares) {
            var $li = '<li><a target="_blank" href="' + this.shares[i].uri.format(url) + '"><i class="ic ' + this.shares[i].clz + '"></i>' + this.shares[i].name + "</a></li>";
            $ul.append($li);
        }
        $ul.find("a").click(function () {
            zing.box.close();
        });
        this.status = true;
        this.element.show();
    }, close: function () {
        this.status = false;
        this.element.hide();
    }
};
zing.box.message = {
    element: null, status: false, withTemplate: function () {
        return zing.box.template({inside: "popup", div: "inside-popup", black: "modal-black"});
    }, open: function (msg, error) {
        zing.box.close();
        if (!this.element) {
            this.element = this.withTemplate();
            $("body").append(this.element);
            zing.role.modal();
        }
        if (msg) {
            if (!error) {
                this.element.find("[area=content]").html('<i class="ic ic-success-white"></i><p class="center">' + msg + "</p>");
            } else {
                this.element.find("[area=content]").html('<i class="ic ic-error-white"></i><p class="center">' + msg + "</p>");
            }
        }
        this.status = true;
        this.element.show();
        setTimeout(function () {
            zing.box.close();
        }, 5 * 1E3);
    }, close: function () {
        this.status = false;
        this.element.hide();
    }, msg: function (msg) {
        this.element.find("[area=content]").html('<p class="center">' + msg + "</p>");
    }, success: function (msg) {
        this.element.find("[area=content]").html('<i class="ic ic-success-white"></i><p class="center">' + msg + "</p>");
    }, error: function (msg) {
        this.element.find("[area=content]").html('<i class="ic ic-error-white"></i><p class="center">' + msg + "</p>");
    }
};
zing.box.createPlaylist = {
    element: null, status: false, withTemplate: function () {
        return zing.box.template({title: "Thêm vào playlist", inside: "popup-add-playlist", div: "inside-popup"});
    }, open: function (e) {
        zing.box.close();
        if (!this.element) {
            this.element = this.withTemplate();
            $("body").append(this.element);
            zing.role.modal();
        }
        this.status = true;
        var $inputPlaylist = $("<div>").addClass("input").append($("<input>").attr("placeholder", "Tên playlist").attr("id", "playlist_name"));
        var $inputPrivacy = $("<div>").addClass("input").append($("<select>").attr("id", "playlist_privacy").append($("<option>").val(1).html("Mọi người")).append($("<option>").val(0).html("Cá nhân")));
        var $inputButtons = $("<div>").addClass("wrap-btn-split").append($("<div>").addClass("btn-split").append($("<a>").addClass("btn-popup block accept").html("Đồng ý"))).append($("<div>").addClass("btn-split").append($("<a>").addClass("btn-popup block cancel").html("Hủy bỏ")));
        var $html = $("<div>").addClass("create-playlist").append($("<p>").addClass("alert alert-danger fn-msg").hide()).append($inputPlaylist).append($inputPrivacy).append($inputButtons);
        this.element.find("[area=content]").html($html);
        this.element.find(".accept").click(function (event) {
            event.preventDefault();
            zing.user.song.addToNewPlaylist();
        });
        this.element.find(".cancel").click(function (event) {
            event.preventDefault();
            zing.box.createPlaylist.close();
        });
        this.element.show();
    }, close: function () {
        this.status = false;
        this.element.hide();
    }, content: function (ct) {
        this.element.find("[area=content]").empty().html(ct);
    }, getContent: function () {
        return this.element.find("[area=content]");
    }
};
zing.role = {};
zing.role.banner = function () {
    if ($(".main-banner").size()) {
        $(".main-banner").slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    if ($("[role=alphabet]").size()) {
        var obj = $("[role=alphabet]");
        if (obj.find("a.active").size()) {
            var left = obj.find("a.active").offset().left;
            obj.scrollLeft(left - 100);
        }
    }
};
zing.role.modal = function () {
    if ($(".z-modal").size()) {
        var zModal = $(".z-modal");
        zModal.find(".dialog").click(function (e) {
            if ($(e.target).hasClass("dialog")) {
                zing.box.close();
            }
        });
        zModal.find(".close").click(function () {
            zing.box.close();
        });
    }
};
zing.role.toogle = function () {
    if ($("a[data-action=open-navigation]").size()) {
        $("a[data-action=open-navigation]").click(function () {
            var options = $(this).data();
            if (options.target) {
                var $target = $(options.target);
                if ($target.hasClass("sb-active")) {
                    $target.removeClass("sb-active").hide();
                    $('#sb-site').removeClass('fix-content');
                    $("[role=page]").show();
                } else {
                    // Send GA click menu
                    sendGAEvent('Click', 'Click menu', 'open menu navigation');

                    $target.addClass("sb-active").show();
                    $('#sb-site').addClass('fix-content');
                    $('.logo-mp3').show();
                    $('.btn-search').show();
                }
            }
        });
    }
    if ($("a[data-action=toggle]").size()) {
        $("a[data-action=toggle]").click(function () {
            var options = $(this).data();
            if (options.target) {
                if ($(options.target).size()) {
                    $(options.target).toggle();
                }
            }
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
            } else {
                $(this).parent().addClass("active");
            }
        });
    }
    if ($("[data-action=box-open]").size()) {
        $("[data-action=box-open]").click(function () {
            var options = $(this).data();
            if (options.target) {
                $(options.target).show();
            }
        });
    }
    if ($("[data-action=box-close]").size()) {
        $("[data-action=box-close]").click(function () {
            var options = $(this).data();
            if (options.target) {
                $(options.target).hide();
            }
        });
    }
    if ($("[data-action=open-point]").size()) {
        $("[data-action=open-point]").click(function () {
            var $parent = $(this).parent().parent();
            if (!$parent.hasClass("active")) {
                $parent.parent().find(".wrap-obj").removeClass("active");
                $parent.addClass("active");
            } else {
                $parent.removeClass("active");
            }
        });
    }
    if ($("[data-action=box-info]").size()) {
        $("[data-action=box-info]").click(function () {
            var options = $(this).data();
            if (options.target) {
                $(options.target).toggle();
                if ($(this).parent().hasClass("full")) {
                    $(this).parent().removeClass("full");
                } else {
                    $(this).parent().addClass("full");
                }
            }
        });
    }
    if ($("[data-action=open-menu]").size()) {
        $("[data-action=open-menu]").click(function () {
            var options = $(this).data();
            if (options.target) {
                $(options.target).toggle();
            }
        });
    }
    if ($("[data-action=lyric-more]").size()) {
        $("[data-action=lyric-more]").click(function () {
            if ($(this).parent().hasClass("short")) {
                $(this).parent().removeClass("short");
            } else {
                $(this).parent().addClass("short");
            }
        });
    }
};
zing.role.more = function () {
    var isLoading = false;
    if ($("[role=more]").size()) {
        $("[role=more]").click(function () {
            if (isLoading == true) {
                return;
            }
            var self = this;
            var options = $(this).data();
            if (options.url && options.target) {
                isLoading = true;
                processJson(options.url, {page: options.page || 1}, function (resp) {
                    isLoading = false;
                    if (resp.error === 0 && resp.data) {
                        $(options.target).append(resp.data);
                        if (resp.more) {
                            $(self).data("page", resp.more);
                        } else {
                            $(self).remove();
                        }
                    }

                    $(options.target).append(resp);
                }, function () {
                    isLoading = false;
                });
            }
        });
    }
};
zing.search = function () {
    var _S = {};
    var _keyword = '';

    function toSearchArea(data) {
        $("div[area=search]").find("ul").empty();
        var title;
        var link;
        var $li;
        var flag = 'none';
        if (data.singer.length > 0) {
            $('.category-artist').css('display', 'block');
            var $ul = $("div[area=search]").find('.category-artist').find("ul").empty();
            for (var j in data.singer) {
                link = "/artist/" + data.singer[j].slug + '-' + data.singer[j].id;
                $li = $("<li>").append('<a class="km4" href="' + link + '">' + data.singer[j].name + "</a>");
                $ul.append($li);
                if (flag == 'none') {
                    flag = 'block';
                }
            }
        } else {
            $('.category-artist').css('display', 'none');
        }
        if (data.song.length > 0) {
            var $ul = $("div[area=search]").find('.category-song').find("ul").empty();
            for (var j in data.song) {
                title = data.song[j].name;
                if (data.song[j].singer) {
                    var singersText = '';
                    for (var k in data.song[j].singer) {
                        if (singersText.length != 0) {
                            singersText += ', ';
                        }
                        singersText += data.song[j].singer[k].name;
                    }
                    title += ' - <span class="title-singer">' + singersText + "</span>";
                }
                link = "/listen-song/" + data.song[j].slug + '-' + data.song[j].id;
                $li = $("<li>").append('<a class="km1" href="' + link + '">' + title + "</a>");
                $ul.append($li);
                if (flag == 'none') {
                    flag = 'block';
                }
            }

            if (data.song.length < 4) {
                /*limit = 4 - data.song.length;
                 $.ajax({
                 url: "/scl-search/" + _keyword + "?limit=" + limit,
                 dataType: "json",
                 success: function (resp) {
                 var $ul = $("div[area=search]").find('.category-song').find("ul");
                 for (var j in resp) {
                 titleResp = resp[j].title;
                 if (resp[j].user) {
                 titleResp += " - <span class='title-singer'>" + resp[j].user.username + "</span>";
                 }

                 link = "/listen-song/scl0-" + resp[j].permalink + '-' + resp[j].id;
                 $li = $("<li>").append('<a class="km1" href="' + link + '">' + titleResp + "</a>");
                 $ul.append($li);
                 if (flag == 'none') {
                 flag = 'block';
                 }
                 }
                 },
                 error: function (xhr, status) {
                 searchThread = null;
                 }
                 });*/
            }

            $('.category-song').css('display', 'block');
        } else {
            /*limit = 4;
             $.ajax({
             url: "/scl-search/" + _keyword + "?limit=" + limit,
             dataType: "json",
             success: function (resp) {
             if (resp.length > 0) {
             var $ul = $("div[area=search]").find('.category-song').find("ul").empty();
             for (var j in resp) {
             titleResp = resp[j].title;
             if (resp[j].user) {
             titleResp += " - <span class='title-singer'>" + resp[j].user.username + "</span>";
             }

             link = "/listen-song/scl0-" + resp[j].permalink + '-' + resp[j].id;
             $li = $("<li>").append('<a class="km1" href="' + link + '">' + titleResp + "</a>");
             $ul.append($li);
             if (flag == 'none') {
             flag = 'block';
             }
             }
             $('.category-song').css('display','block');
             } else {
             $('.category-song').css('display','none');
             }
             },
             error: function (xhr, status) {
             searchThread = null;
             }
             });*/
        }

        if (data.album.length > 0) {
            $('.category-album').css('display', 'block');
            var $ul = $("div[area=search]").find('.category-album').find("ul").empty();
            for (var j in data.album) {
                title = data.album[j].name;
                if (data.album[j].singer) {
                    var singersText = '';
                    for (var k in data.album[j].singer) {
                        if (singersText.length != 0) {
                            singersText += ', ';
                        }
                        singersText += data.album[j].singer[k].name;
                    }
                    title += ' - <span class="title-singer">' + singersText + "</span>";
                }
                link = "/listen-album/" + data.album[j].slug + '-' + data.album[j].id;
                $li = $("<li>").append('<a class="km3" href="' + link + '">' + title + "</a>");
                $ul.append($li);
                if (flag == 'none') {
                    flag = 'block';
                }
            }
        } else {
            $('.category-album').css('display', 'none');
        }
        if (data.video.length > 0) {
            $('.category-video').css('display', 'block');
            var $ul = $("div[area=search]").find('.category-video').find("ul").empty();
            for (var j in data.video) {
                title = data.video[j].name;
                if (data.video[j].singer) {
                    var singersText = '';
                    for (var k in data.video[j].singer) {
                        if (singersText.length != 0) {
                            singersText += ', ';
                        }
                        singersText += data.video[j].singer[k].name;
                    }
                    title += ' - <span class="title-singer">' + singersText + "</span>";
                }
                link = "/watch-video/" + data.video[j].slug + '-' + data.video[j].id;
                $li = $("<li>").append('<a class="km2" href="' + link + '">' + title + "</a>");
                $ul.append($li);
                if (flag == 'none') {
                    flag = 'block';
                }
            }
        } else {
            $('.category-video').css('display', 'none');
        }

        if (data.song.length < 1 && data.singer.length < 1 && data.video.length < 1 && data.album.length < 1) {
            flag = "none";
        }
        $('.result-search').css('display', flag);
    }

    var searchThread;

    function historyToArea() {
        if (searchThread !== null) {
            clearTimeout(searchThread);
        }
        var $ul = $("div[area=search]").find("ul").empty();
        var list = zing.history.list();
        for (var i in list) {
            var $li = $("<li>").append($("<a>").html(list[i]).click(function () {
                var input = $(".input-search").find("input");
                if (input.size()) {
                    input.val($(this).html());
                    _S.byKeyword(input.val());
                }
            }));
            $ul.append($li);
        }
    }

    _S.byKeyword = function (txt) {
        if (txt.length > 1) {
            if (searchThread !== null) {
                clearTimeout(searchThread);
            }
            searchThread = setTimeout(function () {
                $.ajax({
                    url: "f554592775small" + txt,
                    dataType: "json",
                    success: function (resp) {
                        if (resp.code == 1 && !jQuery.isEmptyObject(resp.data)) {
                            toSearchArea(resp.data);
                        }
                        searchThread = null;
                    },
                    error: function (xhr, status) {
                        searchThread = null;
                    }
                });
            }, 500);
            _keyword = txt;
        } else {
            historyToArea();
            $('.result-search').css('display', 'none');
        }
    };
    _S.viewHistory = historyToArea;
    return _S;
}();
zing.role.search = function () {
    if ($("[data-action=search-open]").size()) {
        $("[data-action=search-open]").click(function () {
            var options = $(this).data();
            if ($("[role=page]").size()) {
                $("[role=page]").hide();
                $('#sb-site').removeClass('fix-content');
                $('#z-navigation').removeClass('sb-active');
            }
            if ($("[role=search]").size()) {
                $("[role=search]").show();
                $("body").css("height", "100%").css("width", "100%");
            }
            if (options.focus && $(options.focus).size()) {
                if ($(options.focus).val().length < 1) {
                    zing.search.viewHistory();
                }
                $(options.focus).focus();
            }
        });
    }
    if ($("[data-action=search-close]").size()) {
        $("[data-action=search-close]").click(function () {
            if ($("[role=search]").size()) {
                $("[role=search]").hide();
            }
            if ($("[role=page]").size()) {
                $("[role=page]").show();
                $("body").css("height", "").css("width", "");
            }
        });
    }
    if ($("[data-action=suggestion]").size()) {
        $("[data-action=suggestion]").keyup(function (event) {
            if (event.keyCode == 13) {
                zing.history.add(this.value);
            }
            zing.search.byKeyword(this.value);
        });
    }
    if ($("[data-action=clear-history]")) {
        $("[data-action=clear-history]").click(function () {
            zing.history.clear();
            zing.search.viewHistory();
        });
    }
};
zing.role.detail = function () {
    if ($("[data-action=share]").size()) {
        $("[data-action=share]").click(function (event) {
            var options = $(this).data();
            event.preventDefault();
            if (options.url) {
                zing.box.close();
                zing.box.share.open(options.url);
            }
        });
    }
    if ($("[data-action=fav-open]").size()) {
        $("[data-action=fav-open]").click(function () {
            if (MP3.PLAYLIST) {
                zing.user.playlist.like();
            } else {
                if (MP3.SONG) {
                    zing.user.song.add();
                } else {
                    if (MP3.VIDEO) {
                        zing.user.video.like();
                    }
                }
            }
        });
    }
    if ($("[data-action=more-song]").size()) {
        $("[data-action=more-song]").click(function () {
            $("[role=playlist]").find("[area=more]").show();
            $(this).hide();
        });
    }
    if ($("[data-action=fn-follow]").size()) {
        $("[data-action=fn-follow]").click(function () {
            var options = $(this).data();
            if (!$(this).hasClass("followed")) {
                zing.user.artist.follow(options);
            } else {
                zing.user.artist.unfollow(options);
            }
        });
    }
};
zing.user = {};
zing.user.islogin = function () {
    if (MP3.USER_ID < 1) {
        zing.box.login.open();
        return false;
    }
    return true;
};
zing.user.loginSuccess = function () {
    processJson("/json/user/info.json", [], function (resp) {
        MP3.USER_ID = resp["user_id"];
        MP3.USER_ZALO = resp["zalo_id"];
        MP3.USER_NAME = resp["user_name"];
        MP3.USER_DISPLAY = resp["user_display"];
        $(".user-login").empty().addClass("zme").attr("uid", MP3.USER_ID).attr("onclick", "").append('<span class="avatar"><img area="thumb" class="responsive-img" alt="Zing Mp3" src="' + MP3.IMG_URL + "/dev/skins/mp3_mobile_v2/images/default/60_60.png" + '"></span>').append('<span class="u-name">' + MP3.USER_DISPLAY + "</span>").append('<a href="' + resp["logout"] + '" class="func-back"><i class="icm icm-back"></i></a>').unbind("click");
        zing.box.close();
        zing.me.renderZMEAvatar();
    });
};
zing.user.isLogin = function () {
    if (MP3.USER_ID <= 0) {
        zing.login();
        return false;
    }
    return true;
};
zing.user.song = {};
zing.user.playlist = {};
zing.user.video = {};
zing.user.artist = {};
zing.user.artist.follow = function (options) {
    zing.login(function () {
        if (options.id) {
            processJson("/json/user/follow/artist.json", {artist: options.id, act: "add"}, function (resp) {
                if (resp.error == 0 && resp.total) {
                    $("[area=follow-total]").html(resp.total + " quan tâm");
                    if (!$("[data-action=fn-follow]").hasClass("followed")) {
                        $("[data-action=fn-follow]").addClass("followed");
                    }
                }
            });
        }
    });
};
zing.user.artist.unfollow = function (options) {
    zing.login(function () {
        if (options.id) {
            processJson("/json/user/follow/artist.json", {artist: options.id}, function (resp) {
                if (resp.error == 0 && resp.total) {
                    $("[area=follow-total]").html(resp.total + " quan tâm");
                    if ($("[data-action=fn-follow]").hasClass("followed")) {
                        $("[ data-action=fn-follow]").removeClass("followed");
                    }
                }
            });
        }
    });
};
zing.user.song.add = function () {
    zing.login(function () {
        if (MP3.SONG) {
            processJson("/json/user/playlist.json", null, function (resp) {
                if (resp.error === 0 && resp.data && resp.data.length) {
                    var html = '<li class="fav-song"><a>Danh sách yêu thích</a></li>';
                    for (var i in resp.data) {
                        html += '<li class="to-playlist" data-id="' + resp.data[i].id + '"><a>' + resp.data[i].title + "</a></li>";
                    }
                    html += '<li><a class="add-playlist"><strong>+</strong> Tạo playlist mới</a></li>';
                    zing.box.playlist.open();
                    zing.box.playlist.content(html);
                }
            });
        }
    });
};
zing.user.song.addToNewPlaylist = function () {
    zing.login(function () {
        if (MP3.SONG) {
            var content = zing.box.createPlaylist.getContent();
            content.find(".fn-msg").html("").hide();
            var playlist_name = content.find("input#playlist_name").val();
            var privacy = content.find("select#privacy").val();
            if (playlist_name.length < 1) {
                content.find(".fn-msg").html("Nhập tiêu đề playlist").show();
            } else {
                processJson("/json/user/new/playlist.json", {
                    song: MP3.SONG,
                    name: playlist_name,
                    privacy: privacy
                }, function (resp) {
                    if (resp instanceof Object && resp.data) {
                        zing.box.close();
                        zing.box.message.open(resp.data, false);
                    } else {
                        zing.box.close();
                        zing.box.message.open(resp.message, true);
                    }
                });
            }
        }
    });
};
zing.user.song.like = function () {
    if (MP3.SONG) {
        zing.login(function () {
            processJson("/json/user/like/song.json", {song: MP3.SONG}, function (resp) {
                if (resp instanceof Object && resp.data) {
                    zing.box.close();
                    zing.box.message.open(resp.data, resp.error);
                } else {
                    zing.box.close();
                    zing.box.message.open(resp.message, resp.error);
                }
            });
        });
    }
};
zing.user.song.toPlaylist = function (element) {
    if (MP3.SONG) {
        var options = $(element).data();
        if (options.id) {
            processJson("/json/user/add/song.json", {playlist: options.id, song: MP3.SONG}, function (resp) {
                if (resp instanceof Object && resp.data) {
                    zing.box.close();
                    zing.box.message.open(resp.data, resp.error);
                } else {
                    zing.box.close();
                    zing.box.message.open(resp.message, true);
                }
            });
        }
    }
};
zing.user.playlist.like = function () {
    if (MP3.PLAYLIST) {
        zing.login(function () {
            processJson("/json/user/like/playlist.json", {playlist: MP3.PLAYLIST}, function (resp) {
                if (resp instanceof Object && resp.data) {
                    zing.box.close();
                    zing.box.message.open(resp.data, resp.error);
                } else {
                    zing.box.close();
                    zing.box.message.open(resp.message, resp.error);
                }
            });
        });
    }
};
zing.user.video.like = function () {
    if (MP3.VIDEO) {
        zing.login(function () {
            processJson("/json/user/like/video.json", {video: MP3.VIDEO}, function (resp) {
                if (resp instanceof Object && resp.data) {
                    zing.box.close();
                    zing.box.message.open(resp.data, resp.error);
                } else {
                    zing.box.close();
                    zing.box.message.open(resp.message, resp.error);
                }
            });
        });
    }
};
zing.like = {
    getTokenUrl: "/json/user/like/token",
    getUrl: "f1502407get",
    likeUrl: "f46727238like",
    unlikeUrl: "f-2077447521unlike"
};
zing.like.setTotal = function (total) {
    $("[area=like-total]").html(" • " + total.format(0) + " Lượt thích");
};
zing.like.status = function (status) {
    if (MP3.USER_ID > 0) {
        if (status) {
            $("[data-action=like]").find("i").attr("class", "i-player i-player-fav-active");
        } else {
            $("[data-action=like]").find("i").attr("class", "i-player i-player-fav");
        }
    }
};
zing.like.load = function (options) {
    if (options.key && options.token) {
        var req = {sid: options.key, token: options.token};
        if (MP3.USER_ZALO > 0) {
            req.uid = MP3.USER_ZALO;
        }
        crossJson(this.getUrl, req, function (resp) {
            if (resp.error == 0) {
                zing.like.setTotal(resp.total);
                zing.like.status(resp.like);
            }
        });
    }
};
zing.like.process = function (options) {
    zing.login(function () {
        if (MP3.USER_ZALO > 0 && options.key && options.token) {
            var req = {sid: options.key, token: options.token, uid: MP3.USER_ZALO};
            if ($("[data-action=like]").find("i").hasClass("i-player-fav-active")) {
                crossJson(zing.like.unlikeUrl, req, function (resp) {
                    zing.like.load(options);
                });
            } else {
                crossJson(zing.like.likeUrl, req, function (resp) {
                    zing.like.load(options);
                });
            }
        } else {
            zing.like.getToken();
        }
    });
};
zing.like.getToken = function () {
    if ($("[data-action=like]").size()) {
        var options = $("[data-action=like]").data();
        if (options.id && options.type) {
            var req = {id: options.id, type: options.type};
            processJson(this.getTokenUrl, req, function (resp) {
                if (resp.error == 0 && resp.key && resp.token) {
                    $("[data-action=like]").data("key", resp.key);
                    $("[data-action=like]").data("token", resp.token);
                    options = $("[data-action=like]").data();
                    zing.like.load(options);
                }
            });
        }
    }
};
zing.login = function (callback) {
    if (MP3.USER_ID > 0) {
        if (callback instanceof Function) {
            callback();
        }
    } else {
        zing.box.login.open();
    }
};
zing.role.realtime = function () {
    var length = 15;

    function realTime(url) {
        processJson(url, null, function (resp) {
            if (resp instanceof Object && resp.error === 0) {
                $("div[data-action=realtime]").html(resp.content);
                $("[data-action=timer]").html(resp.time);
            }
        });
    }

    if ($("div[data-action=realtime]").size()) {
        var options = $("div[data-action=realtime]").data();
        if (options.url) {
            window.setInterval(function () {
                realTime(options.url + "?length=" + length);
            }, 1E3 * 10);
        }
        realTime(options.url);
    }
    if ($("[data-action=realtime-more]").size()) {
        $("[data-action=realtime-more]").click(function () {
            length = 40;
            realTime(options.url + "?length=" + length);
            $(this).hide();
        });
    }
};
zing.role.like = function () {
    if ($("[data-action=like]").size()) {
        $("[data-action=like]").click(function (event) {
            event.preventDefault();
            var options = $(this).data();
            zing.like.process(options);
        });
        zing.like.load($("[data-action=like]").data());
    }
};
zing.role.editPlaylist = function () {
    function removePlaylist(event) {
        event.preventDefault();
        var options = $(this).data();
        if (options.id && options.title) {
            if (window.confirm("Bạn đồng ý xóa playlist " + options.title + "?")) {
            }
        }
    }

    if ($("[role=edit_playlist]").size()) {
        zing.box.playlistFunc = {
            element: null, status: false, withTemplate: function () {
                return zing.box.template({inside: "popup-default", ul: "list-social"});
            }, open: function (playlistId, playlistTitle) {
                zing.box.close();
                if (!this.element) {
                    this.element = this.withTemplate();
                    $("body").append(this.element);
                    zing.role.modal();
                }
                this.status = true;
                this.element.show();
                var content = this.element.find("[area=content]");
                content.empty().append($("<li>").append($("<a>").html("Chỉnh sửa").attr("href", "/mymusic/edit/" + playlistId + ".html"))).append($("<li>").append($("<a>").html("Xóa").data("id", playlistId).data("title", playlistTitle).click(removePlaylist)));
            }, close: function () {
                this.status = false;
                this.element.hide();
            }
        };
        $("[role=edit_playlist]").click(function (event) {
            event.preventDefault();
            var options = $(this).data();
            if (options.id) {
                zing.box.playlistFunc.open(options.id, options.title);
            }
        });
    }
};
function getParam(name, url) {
    if (!url) {
        url = location.href;
    }
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}
function debugScreen(msg) {
    var $debug = $("#page-debug");
    if (!$debug.size()) {
        $debug = $("<div>").css({
            "position": "fixed",
            "padding": "5px",
            "bottom": 0,
            "left": 0,
            "z-index": 15,
            "background-color": "#721799",
            "width": "100%"
        }).addClass("debug");
        $("body").append($debug);
    }
    $debug.html(msg);
}
zing.stats = {};
zing.stats.init = function () {
};
zing.stats.start = function (log_data) {
};
function videoPlayer() {
    var video_isloged = false;
    if (MP3.VIDEO && MP3.stream) {
        var vid = document.getElementById("html5-player");
        vid.onloadstart = function () {
            if (!video_isloged) {
                window.setTimeout(function () {
                    if (MP3.LOG_DATA && MP3.LOG_DATA != "") {
                        zing.log.get(MP3.LOG_DATA);
                    }
                }, 5 * 1E3);
                video_isloged = true;
            }
        };
    }
}
function Player() {
    var playlist_isloged = false;
    var video_isloged = false;
    var data;
    var control;
    var jplayer;
    var ignore_timeupdate;
    var playlist;
    var shuffle;
    var index;
    var links;
    var isShuffle = 0;
    var isRepeat = 0;
    var format = {A128: "Audio128", A320: "Audio320"};

    function shuffleList() {
        var i, j, t;
        for (i = 1; i < shuffle.length; i++) {
            j = Math.floor(Math.random() * (1 + i));
            if (j != i) {
                t = shuffle[i];
                shuffle[i] = shuffle[j];
                shuffle[j] = t;
            }
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function nextSong() {
        index = index + 1;
        if (index > playlist.length) {
            if (isRepeat) {
                index = 1;
                playSong();
            }
            return;
        }
        playSong();
    }

    function prevSong() {
        index = index - 1 >= 0 ? index - 1 : playlist.length - 1;
        playSong();
    }

    function shuffleStatus() {
        if (isShuffle) {
            control.shuffle.find("i").removeClass("i-player-shuffle").addClass("i-player-shuffle-on");
        } else {
            control.shuffle.find("i").removeClass("i-player-shuffle-on").addClass("i-player-shuffle");
        }
    }

    function repeatStatus() {
        if (isRepeat) {
            control.repeat.find("i").removeClass("i-player-repeat").addClass("i-player-repeat-all");
        } else {
            control.repeat.find("i").removeClass("i-player-repeat-all").addClass("i-player-repeat");
        }
    }

    function getIndex() {
        var hash;
        if (window.location.hash !== undefined) {
            hash = window.location.hash;
        } else {
            var url = window.location.href;
            hash = url.substring(url.indexOf("#"));
        }
        hash = hash.replace("#", "");
        var params = {};
        var regex = /[^&?]*?=[^&?]*/;
        var arrP = hash.match(regex);
        if (arrP && arrP.length) {
            for (var i = 0; i < arrP.length; i++) {
                var tmp = arrP[i].split("=");
                if (tmp.length === 2) {
                    params[tmp[0]] = tmp[1];
                }
            }
        }
        if (params.st) {
            index = parseInt(params.st);
        } else {
            index = 1;
        }
        var id = playlist[index - 1];
        if (isShuffle) {
            swapSuffleIndex(shuffle, id);
        }
    }

    // function initOverlayAdverting() {
    //     if (window.AdtimaMp3Wap) {
    //         if ($("#wrap-player").size()) {
    //             var $ads = $("#Mp3_Wap_Overlay");
    //             if (!$ads.size()) {
    //                 $ads = $("<div>").attr("z2-responsive", "true").attr("z2-logo-position", "bottom").attr("id", "Mp3_Wap_Overlay").addClass("banner-300x100");
    //                 if (MP3.PLAYLIST) {
    //                     if ($(window).innerWidth() <= 320) {
    //                         $ads.css("width", "225px").css("height", "75px");
    //                     }
    //                 }
    //                 $("#wrap-player").append($ads);
    //             }
    //         }
    //     }
    // }

    var song_log_data = null;

    function playSong() {
        console.log("playSong...");
        setTimeout(function () {
            $(".popup.chord").click(function (e) {
                $('.popuptext').removeClass('show');
                $(this).children('.popuptext').toggleClass('show');
                e.stopPropagation();
            });

            $(document).click(function () {
                $('.popuptext').removeClass('show');
            });

            $('.popuptext').click(function () {
                $(this).removeClass('show');
                return false;
            });
            jtab.init();
            jtab.renderimplicit();
        }, 1000);

        song_log_data = null;
        $(".lock").hide();
        links = null;
        zing.lyric.reset();
        if (getCurrentId()) {
            var playdata_prefix = '';
            $("#download-button").attr('song_id', getCurrentId());
            var source;
            if (MP3.SOURCE == 'default') {
                playdata_prefix = '/playdata-song/';
                source = 'laguaz.net';
            } else if (MP3.SOURCE == 'soundcloud') {
                playdata_prefix = '/playdatasoundcloud-song/';
                source = 'api.soundcloud.com';
            }

            processJson(playdata_prefix + getCurrentId(), null, function (resp) {
                if (resp instanceof Object && resp.code === 0 && resp.data && resp.data[0].source_list) {
                    var stream = resp.data[0].source_base;
                    $('.jp-title.ellipsis-1').text(resp.data[0].name);
                    $('.name-singer').text(resp.data[0].artist);
                    $('.title-main-song.song-name').text(resp.data[0].name);
                    $('#tab-lyrics h2').html('Lirik: ' + resp.data[0].name);
                    $('#tab-lyrics-chord h2').html('Lirik Chord: ' + resp.data[0].name);
                    $('.view-song').html(resp.data[0].views + ' views');

                    // $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                    //     console.log(/Android/i.test(navigator.userAgent));
                    //     console.log(data.country_code);
                    //     //if (data.country_code == 'ID' && /Android/i.test(navigator.userAgent)) {
                    //     if (data.country_code == 'ID' && /Android/i.test(navigator.userAgent)) {
                    //         $("#download-button").attr('onclick', 'openDownloadBanner()');
                    //         $(".btn-download-banner").attr('onclick', 'downloadInBanner()');
                    //         $(".close-download-banner").attr('onclick', 'closeDownloadBanner(\'****' + resp.data[0].link_download + '****\')');
                    //     } else {
                    //         $("#download-button").attr('onclick', 'downloadSong(\'****' + resp.data[0].link_download + '****\')');
                    //     }
                    // });

                    /**
                     * Show popup when download here
                     *
                    //Show popup when click download button
                    $('#download-button').on('click', function (e) {
                        if (null == readCookie('modal_download_open')) {
                            $('#popupNotification').modal('show');
                        } else {
                            $(this).onclick = downloadSong('****' + resp.data[0].link_download + '****');
                        }
                    });

                    $('#second-modal-cancel').on('click', function () {
                        //create cookie
                        createCookie('modal_download_open', 1, 1);

                        //download song
                        $(this).onclick = downloadSong('****' + resp.data[0].link_download + '****');
                    });
                    */

                    $('#download-button').attr('onclick', 'downloadSong(\'****' + resp.data[0].link_download + '****\')');

                    for (i = 0; i < resp.data[0].artist_list.length; i++) {
                        $('.singer-song').html('<a href="/artist/' + resp.data[0].artist_list[i].slug + '-' + resp.data[0].artist_list[i].id + '" title="' + resp.data[0].artist_list[i].name + '">' + resp.data[0].artist_list[i].name + '</a>');
                    }

                    // GA event download
                    var page = $("#download-button").data('page');
                    jQuery('#download-button').on('click', function () {
                        //you should first check if ga is set
                        var data = {"id": getCurrentId(), "source": source, "name": resp.data[0].name};
                        var jsonData = JSON.stringify(data);
                        if (typeof ga !== 'undefined') {
                            ga('send', 'event', page, 'Download', jsonData);
                        }
                    });

                    if (stream.length == 0) {
                        stream = resp.data[0].source_list[0];
                    } else {
                        stream += '/' + resp.data[0].source_list[0];
                    }
                    if (stream) {
                        // if (!MP3.BANNER_OFF) {
                        //     window.setTimeout(displayOverlayAdverting, 3E3);
                        // }
                        var media = {title: resp.data.title, mp3: stream, solution: "html"};
                        $(jplayer).jPlayer("setMedia", media);

                        var $lyric_chord = $("[area=lyric-chord]");
                        if (resp.data[0].lyricschord) {
                            if ($lyric_chord.size()) {
                                $lyric_chord.empty();
                                $lyric_chord.append('<div class="short-lyricchord"><pre>' + resp.data[0].lyricschord + '</pre></div>'); //Load lyrics chord
                                $lyric_chord.parent().show();
                            } else {
                                // $lyric_chord.parent().hide();                                
                                $lyric_chord.parent().children('.btn-more').hide();
                            }
                        } else {
                            if ($lyric_chord.size()) {
                                // $lyric_chord.parent().hide();
                                $lyric_chord.parent().children('.btn-more').hide();
                                $lyric_chord.empty();
                            }
                        }

                        processJson('/getlyrics-song/' + getCurrentId(), null, function (resp_lyric) {
                            if (resp_lyric.code == 404) {
                                //$("[area=lyric]").parent().hide();
                                return;
                            }
                            if (resp_lyric.data[0].content && resp_lyric.data[0].content !== "") {
                                zing.lyric.load(resp_lyric.data[0].content.replace("Bài Hát:", "Lagu:").replace("Bài hát:", "Lagu:").replace("Ca Sĩ:", "Artis:").replace("Ca sĩ:", "Artis:"));
                            }

                            if (resp_lyric.data[0].avatar && resp_lyric.data[0].avatar !== "") {
                                $('#wrap-player').find('.cover').css('background-image', 'url(\'' + resp_lyric.data[0].avatar + '\')')
                            }
                            var $alyric = $("[area=lyric]");
                            if (resp_lyric.data[0].content) {
                                if ($alyric.size()) {
                                    $alyric.empty().append("<p>" + resp_lyric.data[0].content_formatted.replace("Bài Hát:", "Lagu:").replace("Bài hát:", "Lagu:").replace("Ca Sĩ:", "Artis:").replace("Ca sĩ:", "Artis:") + "</p>");
                                    $alyric.parent().show();
                                } else {
                                    $alyric.parent().children('.btn-more').hide();
                                }
                            } else {
                                if ($alyric.size()) {
                                    $alyric.parent().children('.btn-more').hide();
                                    // $alyric.parent().hide();
                                }
                            }
                        });

                        //if (resp.data.log_data && resp.data.log_data != "") {
                        //    song_log_data = resp.data.log_data;
                        //}
                        if (MP3.PLAYLIST) {
                            var pl = $("div[role=playlist]");
                            pl.find(".have-num").removeClass("active");
                            pl.find("[data-id=" + resp.data[0].id + "]").parent().addClass("active");
                        }
                    }

                } else {
                    if (resp.code == 1) {
                        $(".lock").show();
                        $(".jp-title").html(resp.title ? resp.title : "N/A");
                        setTimeout(nextSong, 5E3);
                    } else {
                        setTimeout(nextSong, 1E3);
                    }
                }
            });
        }
    }

    function getPlaylist() {
        var pl = $("div[role=playlist]");
        if (pl.size()) {
            playlist = [];
            shuffle = [];
            var rows = $("div[role=playlist]").find("[role=song]");
            rows.each(function () {
                if ($(this).data().id) {
                    playlist.push($(this).data().id);
                    shuffle.push($(this).data().id);
                }
            });
            shuffleList(shuffle);
        }
    }

    function getCurrentId() {
        if (MP3.PLAYLIST) {
            if (isShuffle) {
                if (shuffle[index - 1]) {
                    return shuffle[index - 1];
                }
            } else {
                if (playlist[index - 1]) {
                    return playlist[index - 1];
                }
            }
        } else {
            if (MP3.SONG) {
                return MP3.SONG;
            }
        }
        return null;
    }

    function swapSuffleIndex(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == id) {
                index = i + 1;
            }
        }
    }

    if (MP3.PLAYLIST || MP3.SONG) {
        var thread_log = null;
        jplayer = $("#html5-playlist-player").jPlayer({
            solution: "html",
            supplied: "oga, mp3",
            loop: MP3.PLAYLIST ? false : isRepeat,
            preload: "metadata",
            autoplay: false,
            cssSelectorAncestor: ".player-controls",
            cssSelector: {play: ".jp-play", pause: ".jp-pause", playBar: ".jp-play-bar"},
            loadstart: function () {
                if (!playlist_isloged) {
                    window.setTimeout(function () {
                        if (MP3.LOG_DATA && MP3.LOG_DATA != "") {
                            zing.log.get(MP3.LOG_DATA);
                            playlist_isloged = true;
                        }
                    }, 5 * 1E3);
                }
                if (song_log_data) {
                    if (thread_log != null) {
                        window.clearTimeout(thread_log);
                    }
                    thread_log = window.setTimeout(function () {
                        zing.log.get(song_log_data);
                        thread_log = null;
                    }, 10 * 1E3);
                }
            },
            loadedmetadata: function () {
                console.log("loadedmetadata", "event");
                $(jplayer).jPlayer("play");
            },
            timeupdate: function (event) {
                if (!ignore_timeupdate) {
                    control.process.slider("value", event.jPlayer.status.currentPercentAbsolute);
                }
                if (zing.lyric.on()) {
                    zing.lyric.display(event.jPlayer.status.currentTime);
                }
            },
            ended: function () {
                if (MP3.PLAYLIST) {
                    nextSong();
                }
                if (MP3.SONG) {
                    // if (isRepeat) {
                    $(jplayer).jPlayer("play", 0);
                    // } else {
                    //     $(jplayer).jPlayer("pause");
                    // }
                }
            },
            ready: function () {
                // initOverlayAdverting();
                if (MP3.PLAYLIST) {
                    getPlaylist();
                    getIndex();
                }
                playSong();
                if (zing.lyric.on()) {
                    zing.lyric.createItems();
                }
            }
        });
    } else {
        if (MP3.VIDEO && MP3.stream) {
            var vid = document.getElementById("html5-player");
            vid.onloadstart = function () {
                if (!video_isloged) {
                    window.setTimeout(function () {
                        if (MP3.LOG_DATA && MP3.LOG_DATA != "") {
                            zing.log.get(MP3.LOG_DATA);
                        }
                    }, 5 * 1E3);
                    video_isloged = true;
                }
            };
        }
    }

    try {
        data = jplayer.data("jPlayer");
    } catch (err) {
        return;
    }
    control = {};
    if (MP3.PLAYLIST) {
        var pControl = $(".player-controls");
        control.prev = pControl.find(".jp-prev");
        control.next = pControl.find(".jp-next");
        control.shuffle = pControl.find(".jp-shuffle");
        control.repeat = pControl.find(".jp-repeat");
        if (control.shuffle.size()) {
            isShuffle = zing.store.get("mp3_p_shuffle") ? parseInt(zing.store.get("mp3_p_shuffle")) : 0;
            shuffleStatus();
        }
        if (control.repeat.size()) {
            isRepeat = zing.store.get("mp3_p_repeat") ? parseInt(zing.store.get("mp3_p_repeat")) : 0;
            repeatStatus();
        }
        $(control.prev).click(function (e) {
            $(jplayer).jPlayer("pause");
            e.preventDefault();
            if (data.status && data.status.currentTime && data.status.currentTime > 5) {
                $(jplayer).jPlayer("play", 0);
            } else {
                prevSong();
            }
        });
        $(control.next).click(function (e) {
            $(jplayer).jPlayer("pause");
            e.preventDefault();
            index = index + 1;
            if (index > playlist.length) {
                index = 1;
            }
            playSong();
        });
        $(control.shuffle).click(function (e) {
            e.preventDefault();
            var oid = getCurrentId();
            isShuffle = isShuffle == 1 ? 0 : 1;
            zing.store.set("mp3_p_shuffle", isShuffle);
            if (isShuffle == 0) {
                swapSuffleIndex(playlist, oid);
            }
            shuffleStatus();
        });
        $(control.repeat).click(function (e) {
            e.preventDefault();
            isRepeat = isRepeat == 1 ? 0 : 1;
            zing.store.set("mp3_p_repeat", isRepeat);
            repeatStatus();
        });
        $("[role=song]").click(function () {
            var option = $(this).data();
            if (option.st) {
                $(jplayer).jPlayer("pause");
                //location.hash = "#st=" + parseInt(option.st);
                location.hash = "";
                if (isShuffle) {
                    for (var i in shuffle) {
                        if (shuffle[i] == option.id) {
                            index = parseInt(i) + 1;
                        }
                    }
                } else {
                    index = parseInt(option.st);
                }
                playSong();
            }
        });
    }
    control.process = $(".jp-progress-slider").slider({
        animate: "fast", max: 100, range: "min", step: .1, value: 0, start: function () {
            ignore_timeupdate = true;
        }, stop: function (event, ui) {
            ignore_timeupdate = false;
            var sp = data.status.seekPercent;
            if (sp > 0) {
                var time = ui.value * (100 / sp);
                jplayer.jPlayer("playHead", time);
                if (zing.lyric.on()) {
                    zing.lyric.sync(ui.value / 100 * data.status.duration);
                }
            } else {
                setTimeout(function () {
                    control.process.slider("value", 0);
                    if (zing.lyric.on()) {
                        zing.lyric.sync(0);
                    }
                }, 0);
            }
        }
    });
}
try {
    $(document).ready(function () {
        if (zing.role) {
            for (var i in zing.role) {
                if (zing.role[i] instanceof Function) {
                    zing.role[i]();
                }
            }
        }
        zing.me.renderZMEAvatar();
        zing.comment.start();
        if (top && top.window.location.href == window.location.href) {
            if ($.jPlayer instanceof Function) {
                zing.player = new Player;
            } else {
                videoPlayer();
            }
        }
        if ($(".scroll-to-top").size()) {
            $(".scroll-to-top").click(function () {
                $(document).scrollTop(0);
            });
        }
        if (OS == flatform.IOS) {
            $("body").mobileFix({inputElements: "input, select", addClass: "fixfixed"});
        }
        // zing.log.init();
        var debug = getParam("debug", window.location.href);
        zing.debug = debug;
        if (debug && parseInt(debug) == 1) {
            debugScreen("Time until DOMready: " + (Date.now() - window["timerStart"]));
        }
    });
} catch (ex) {
    console.log(ex);
}
function loginCallback(e, msg) {
    try {
        if (e !== 0) {
            if (e === -114) {
                $.ajax({url: "f1244503569cp" + MP3.MP3_URL, data: "dataType:text", dataType: "jsonp"});
                setTimeout(function () {
                    zing.box.close();
                    zing.user.loginSuccess();
                    zing.like.getToken();
                }, 500);
            } else {
                $(".fn-msg").html(msg).show();
            }
        } else {
            zing.box.close();
            zing.user.loginSuccess();
            zing.like.getToken();
        }
    } catch (err) {
        if (zing.debug) {
            debugScreen("Error: " + err.message);
        }
    }
}
;
