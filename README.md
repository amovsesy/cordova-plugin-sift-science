# cordova-plugin-sift-science
Sift Science Integration Plugin for Cordova Apps

## To install the plugin:
```
cordova plugin add cordova-plugin-sift-science
```

## To use the plugin:

### In $ionicPlatform.ready add the following lines:
```javascript
var jsSnippetKey = 'YOUR JS SNIPPET';
var accountID = 'YOUR ACCOUNT ID';
var sessionID = 'A SESSION ID FOR THE USER';
var userID = '';
SiftJs.initSift(jsSnippetKey, accountID, sessionID, userID);
```

### When you can ID the user:
```javascript
SiftJs.setUserID('YOUR ID');
```

### When a user switches views in your app:
```javascript
SiftJs.trackPageView();
```

### When a user logs out:
```javascript
SiftJs.unsetUserID();
```
