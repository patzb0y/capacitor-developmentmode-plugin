import { registerPlugin, WebPlugin } from '@capacitor/core';

const developmentmodeplugin = registerPlugin('developmentmodeplugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.developmentmodepluginWeb()),
});

class developmentmodepluginWeb extends WebPlugin {
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

export { developmentmodeplugin };
//# sourceMappingURL=index.js.map
