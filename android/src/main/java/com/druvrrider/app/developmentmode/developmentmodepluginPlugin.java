package com.druvrrider.app.developmentmode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "developmentmodeplugin")
public class developmentmodepluginPlugin extends Plugin {

    private developmentmodeplugin implementation = new developmentmodeplugin();
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
