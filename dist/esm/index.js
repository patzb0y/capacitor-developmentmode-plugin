import { registerPlugin, WebPlugin } from '@capacitor/core';

const developmentmodeplugin = registerPlugin('DevelopmentModePlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.DevelopmentModePluginWeb()),
});

class DevelopmentModePluginWeb extends WebPlugin {
    async isDeveloperModeEnabled() {
        // Web doesn't have access to Android's settings, so we mock the behavior
        return {
            developerMode: false,
        };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DevelopmentModePluginWeb: DevelopmentModePluginWeb
});

export { developmentmodeplugin };
//# sourceMappingURL=index.js.map
