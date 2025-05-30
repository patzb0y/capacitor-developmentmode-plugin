'use strict';

var core = require('@capacitor/core');

const developmentmodeplugin = core.registerPlugin('DevelopmentModePlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.DevelopmentModePluginWeb()),
});

class DevelopmentModePluginWeb extends core.WebPlugin {
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
  developmentmodepluginWeb: developmentmodepluginWeb
});

exports.developmentmodeplugin = developmentmodeplugin;
//# sourceMappingURL=plugin.cjs.js.map
