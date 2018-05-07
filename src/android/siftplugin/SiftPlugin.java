package siftplugin;

import android.app.Activity;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;

import siftscience.android.Sift;

public class SiftPlugin extends CordovaPlugin {
  private Activity activity;

  public SiftPlugin() {
    this.activity = null;
  }

  @Override
  protected void pluginInitialize() {
    this.activity = this.cordova.getActivity();
  }

  @Override
  public void onPause(boolean multitasking) {
    super.onPause(multitasking);
    Sift.pause();
  }

  @Override
  public void onResume(boolean multitasking) {
    super.onResume(multitasking);
    Sift.resume(this.activity);
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    Sift.close();
  }

  /**
   * <p>
   * cordova.exec() method reference.
   * All exec() calls goes to this part.
   * </p>
   *
   * @param action          A {@link String} value method to be executed.
   * @param args            A {@link JSONArray} value parameters passed along with the action param.
   * @param callbackContext A {@link CallbackContext} function passed for executing callbacks.
   */
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("initSift")) {
      String jsSnippetKey = args.getString(0);
      String accountID = args.getString(1);
      String userID = args.getString(2);

      Sift.open(this.activity, new Sift.Config.Builder()
           .withAccountId(accountID)
           .withBeaconKey(jsSnippetKey)
           .build());
      Sift.collect();

      Sift.setUserId(userID);
      return true;
    } else if (action.equals("unsetUserID")) {
      Sift.unsetUserId();
      return true;
    } else if (action.equals("setUserID")) {
      String userID = args.getString(0);

      Sift.setUserId(userID);
      return true;
    }

    return false;
  }
}
