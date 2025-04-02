package com.druvrrider.app.developmentmode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.Context;
import android.provider.Settings;
@CapacitorPlugin(name = "developmentmodeplugin")
public class developmentmodepluginPlugin extends Plugin {
    @PluginMethod
    public void isDeveloperModeEnabled(PluginCall call) {
        Context context = getContext();
        int isDevMode = Settings.Global.getInt(
            context.getContentResolver(),
            Settings.Global.DEVELOPMENT_SETTINGS_ENABLED, 0
        );

        JSObject result = new JSObject();
        result.put("developerMode", isDevMode == 1);
        call.resolve(result);
    }
}
