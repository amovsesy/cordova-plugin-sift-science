var exec = require('cordova/exec');

var _sift = window._sift = window._sift || [];

var Sift = function () {
}

function siftSuccessCallback(res) {
  console.log(res);
}

function siftErrorCallback(err) {
  console.log(err);
}

Sift.prototype.initSift = function(jsSnippetKey, accountID, sessionID, userID) {
  userID = userID || '';

  _sift.push(['_setAccount', jsSnippetKey]);
  _sift.push(['_setSessionId', sessionID]);
  _sift.push(['_setUserId', userID]);
  _sift.push(['_trackPageview']);

  (function() {
    function ls() {
      var e = document.createElement('script');
      e.src = 'https://cdn.siftscience.com/s.js';
      document.body.appendChild(e);
    }
    if (window.attachEvent) {
      window.attachEvent('onload', ls);
    } else {
      window.addEventListener('load', ls, false);
    }
  })();

  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'initSift', jsSnippetKey, accountID, userID);
}

Sift.prototype.trackPageView = function() {
  _sift.push(['_trackPageview']);
}

Sift.prototype.setUserID = function(userID) {
  _sift.push(['_setUserId', userID]);

  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'setUserID', userID);
}

Sift.prototype.unsetUserID = function() {
  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'unsetUserID', userID);
}
