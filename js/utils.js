var Flyer = {};

(function(b) {
  var a = navigator.userAgent;
  b.isAndroid = function() {
      if (/Android/i.test(a) || /Linux/i.test(a)) {
          return true
      }
      return false
  };
  b.isIOS = (function() {
      if (/iPhone/i.test(a) || /iPad/i.test(a)) {
          return true
      }
      return false
  })();
  b.isWeiXin = function() {
      if (/MicroMessenger/i.test(a)) {
          return true
      } else {
          return false
      }
  };
  b.browserAgent = function() {
      var e = navigator.userAgent.toLowerCase();
      var c = /msie/i.test(e),
      f = /net/i.test(e),
      d = /firefox/i.test(e);
      if (c >= 0 || f >= 0 || d >= 0 || /Edge\/12./i.test(e)) {}
  };
  b.preloadContentImages = function() {
      if (!b._tmpContentImageList || b._tmpContentImageList.length < 2) {
          return
      }
      b._tmpContentImageList.splice(0, 2);
      for (var d in b._tmpContentImageList) {
          var c = b._tmpContentImageList[d];
          for (var f in c) {
              var e = new Image();
              e.src = c[f]
          }
      }
  };
  b.isJSON = function(c) {
      try {
          if (!c) {
              return false
          } else {
              var f = JSON.parse(c);
              return true
          }
      } catch(d) {
          return false
      }
  };
  b.checkFirstVisit = function() {
      if (b.isJSON(localStorage.getItem("visitedIdentifierH5"))) {
          var c = JSON.parse(localStorage.getItem("visitedIdentifierH5"));
          for (var d = 0; d < c.length; d++) {
              if (c[d] == b._identifier) {
                  return false
              }
          }
          return true
      } else {
          return true
      }
  };
  b.saveIdentifier = function() {
      var c = localStorage.getItem("visitedIdentifierH5");
      if (b.isJSON(c) && JSON.parse(c) instanceof Array) {
          c = JSON.parse(c)
      } else {
          c = []
      }
      c.push(b._identifier);
      localStorage.setItem("visitedIdentifierH5", JSON.stringify(c))
  };
})(Flyer);

Flyer.HexToRgba = function(a, c) {
    if (c != 1) {
        var d = parseInt(((a.indexOf("#") > -1) ? a.substring(1) : a), 16);
        var b = {
            r: d >> 16,
            g: (d & 65280) >> 8,
            b: (d & 255)
        };
        a = "rgba(" + b.r + "," + b.g + "," + b.b + "," + c + ")"
    }
    return a
};

// Flyer.audioCtrl = function() {
//     var n;
//     var a = $("#pageMusic").attr("data-src");
//     var j = $("#pageMusic").attr("data-loop");
//     var b = $("#pageMusic").attr("data-open");
//     var f = $("#pageMusic").attr("data-auto");
//     var i = $("#pageMusic").attr("data-usericon");
//     var g = $("#pageMusic").attr("data-color");
//     var d = $("#pageMusic").attr("data-iconpath");
//     if (!b) {
//         return
//     }
//     if (a == null || a == "") {
//         Flyer.ing("音乐不存在!", true, 3000, "notice");
//         return
//     }
//     var o = false;
//     function m() {
//         var p;
//         var q = $("#musicIcon");
//         if (n) {
//             return
//         }
//         if (window.Audio && (p = new Audio()).canPlayType("audio/mpeg")) {
//             p.addEventListener("play", c, false);
//             p.addEventListener("pause", l, false);
//             p.addEventListener("ended", k, false);
//             p.id = "musicplayer";
//             p.src = a;
//             if (j == "true") {
//                 p.loop = true
//             } else {
//                 p.loop = false
//             }
//             if (f == "true") {
//                 p.autoplay = true
//             } else {
//                 p.autoplay = false
//             }
//             if (!Flyer._templateData[0].templatetype && p.autoplay) {
//                 Flyer.audioAutoPlay(p)
//             } else {
//                 p.pause();
//                 o = true
//             }
//             document.getElementById("pageMusic").appendChild(p);
//             n = p;
//             if (i == "true" && d) {
//                 q.css({
//                     "background-image": "url(" + d + ")"
//                 }).addClass("hasPic")
//             } else {
//                 q.css({
//                     "background-color": Flyer.HexToRgba(g, 0.2)
//                 });
//                 q.find("div").css({
//                     "background-color": Flyer.HexToRgba(g, 0.5)
//                 })
//             }
//         }
//         e(0)
//     }
//     var e = function(p) {
//         if (Flyer._templateData[p].templatetype === 1 && n) {
//             if (!n.paused) {
//                 n.pause();
//                 o = true
//             }
//             $("#musicIcon").hide()
//         } else {
//             if (Flyer._templateData[p].templatetype === 99 && n) {
//                 if (o) {
//                     Flyer.audioAutoPlay(n)
//                 }
//                 $("#musicIcon").hide()
//             } else {
//                 if (Flyer._templateData[p].templatetype === 3 && n) {
//                     if (Flyer.getQueryString("view") == "vr") {
//                         n.pause();
//                         o = true;
//                         $("#musicIcon").hide()
//                     } else {
//                         if (Flyer._templateData[p].vrPage.playMusic) {
//                             if (o) {
//                                 Flyer.audioAutoPlay(n)
//                             }
//                         } else {
//                             o = true;
//                             n.pause()
//                         }
//                         if (Flyer._templateData[p].vrPage.musicTips) {
//                             $("#musicIcon").show()
//                         } else {
//                             $("#musicIcon").hide()
//                         }
//                     }
//                 } else {
//                     if (n) {
//                         if (o && n.autoplay) {
//                             Flyer.audioAutoPlay(n)
//                         }
//                         if (Flyer.isAndroid() && Flyer.checkSpecialEffects()) {
//                             $("#musicIcon").hide();
//                             setTimeout(function() {
//                                 $("#musicIcon").show()
//                             },
//                             0)
//                         } else {
//                             $("#musicIcon").show()
//                         }
//                     }
//                 }
//             }
//         }
//     };
//     var h = false;
//     Flyer.audioCtrl.musicAndVideoPlayer = function(p) {
//         if (!n) {
//             return
//         }
//         if (p === 0) {
//             if (!n.paused) {
//                 n.pause();
//                 h = true
//             }
//         } else {
//             if (p === 1) {
//                 if (h) {
//                     n.play()
//                 }
//             }
//         }
//     };
//     function c() { ! $("#musicIcon").hasClass("musicIconRotate") && $("#musicIcon").addClass("musicIconRotate")
//     }
//     function l() {
//         $("#musicIcon").removeClass("musicIconRotate")
//     }
//     function k() {
//         if ($("#musicIcon:visible").length == 0) {
//             return
//         }
//         if (!n.loop) {
//             $("#musicIcon").removeClass("musicIconRotate")
//         } else {
//             _audio.play()
//         }
//     }
//     $("#musicIcon").bind("click",
//     function() {
//         if (n.paused) {
//             n.play()
//         } else {
//             o = false;
//             h = false;
//             n.pause()
//         }
//     });
//     $(".fMain_content").bind("slidePageEnd",
//     function(q) {
//         var p = window.parent.pageSwiper;
//         var q = p.activeIndex;
//         e(q)
//     });
//     m()
// };
Flyer.audioAutoPlay = function(audio) {
    if (!Flyer.isWeiXin()) {
        audio.play();
        return
    }
    audio.play();
    try {
        wx.checkJsApi({
            jsApiList: ["checkJsApi"],
            success: function() {
                audio.play()
            }
        })
    } catch(b) {}
};
console.log('Flyer', Flyer);

var AudioObj = {};

AudioObj.createAudio = function(src) {
  if (src) {
    var eleAudio = $('#pageMusic')[0];
    console.log('eleAudio', eleAudio);
    Flyer.audioAutoPlay(eleAudio);
  }
  document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
      var audio = document.getElementById('audio');
      if (audio) {
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.play();
        }, false);
      }
    }
    audioAutoPlay();
  });
}

AudioObj.switchMusicIcon = function() {
  if ($('.uniformlyRotating').length) {
    $('.music-btn img').removeClass('uniformlyRotating');
  } else {
    $('.music-btn img').addClass('uniformlyRotating');
  }

  var eleAudio = $('#pageMusic')[0];
  if (eleAudio) {
    if (eleAudio.paused) {
      eleAudio.play();
    } else {
      eleAudio.pause();
    }
  }
}

console.log('AudioObj', AudioObj);
