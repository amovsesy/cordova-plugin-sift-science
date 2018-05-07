#import "SiftPlugin.h"
#import <Cordova/CDV.h>

@implementation SiftPlugin : CDVPlugin

  - (void)pluginInitialize
  {
    NSLog(@"[cordova-plugin-sift-science] plugin initialized");
  }

  - (void) initSift:(CDVInvokedUrlCommand*)command
  {
    NSString* jsSnippetKey = [command.arguments objectAtIndex:0];
    NSString* accountID = [command.arguments objectAtIndex:1];
    NSString* userID = [command.arguments objectAtIndex:2];

    Sift *sift = [Sift sharedInstance];
    [sift setAccountId:accountID];
    [sift setBeaconKey:jsSnippetKey];
    [sift setAllowUsingMotionSensors:YES];
    [sift setUserId:userID];
  }

  - (void) setUserID:(CDVInvokedUrlCommand*)command
  {
    NSString* userID = [command.arguments objectAtIndex:0];
    [[Sift sharedInstance] setUserId:userID];
  }

  - (void) unsetUserID:(CDVInvokedUrlCommand*)command
  {
  }

@end
