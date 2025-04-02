import { WebPlugin } from '@capacitor/core';
export class developmentmodepluginWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map