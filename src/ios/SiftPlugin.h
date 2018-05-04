#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>

#import "Sift/Sift.h"

@interface SiftPlugin : CDVPlugin

  - (void) initSift:(CDVInvokedUrlCommand*)command;
  - (void) setUserID:(CDVInvokedUrlCommand*)command;
  - (void) unsetUserID:(CDVInvokedUrlCommand*)command;

@end
