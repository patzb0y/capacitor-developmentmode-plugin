import { WebPlugin } from '@capacitor/core';

import type { developmentmodepluginPlugin } from './definitions';

export class developmentmodepluginWeb extends WebPlugin implements developmentmodepluginPlugin {
  async isDeveloperModeEnabled(): Promise<{ developerMode: boolean }> {
    // Web doesn't have access to Android's settings, so we mock the behavior
    return {
      developerMode: false,  // Or `true` depending on what you want to return for testing
    };
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

}
