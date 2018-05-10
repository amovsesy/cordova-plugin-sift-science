var exec = require('cordova/exec');

var _sift = window._sift = window._sift || [];

var SiftJs = function () {
}

function siftSuccessCallback(res) {
  console.log(res);
}

function siftErrorCallback(err) {
  console.log(err);
}

SiftJs.prototype.initSift = function(jsSnippetKey, accountID, sessionID, userID) {
  userID = userID || '';

  _sift.push(['_setAccount', jsSnippetKey]);
  _sift.push(['_setSessionId', sessionID]);
  _sift.push(['_setUserId', userID]);
  _sift.push(['_trackPageview']);

  var e = document.createElement('script');
  e.src = 'https://cdn.siftscience.com/s.js';
  document.body.appendChild(e);

  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'initSift', [jsSnippetKey, accountID, userID]);
}

SiftJs.prototype.trackPageView = function() {
  _sift.push(['_trackPageview']);
}

SiftJs.prototype.setUserID = function(userID) {
  _sift.push(['_setUserId', userID]);

  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'setUserID', [userID]);
}

SiftJs.prototype.unsetUserID = function() {
  _sift.push(['_setUserId', '']);
  
  exec(siftSuccessCallback, siftErrorCallback, 'SiftPlugin', 'unsetUserID', []);
}

// export
module.exports = new SiftJs()
