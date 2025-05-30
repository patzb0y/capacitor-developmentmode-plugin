#import <Capacitor/Capacitor.h>

CAP_PLUGIN(DevelopmentModePlugin, "DevelopmentModePlugin",
   CAP_PLUGIN_METHOD(isDeveloperModeEnabled, CAPPluginReturnPromise);
)
