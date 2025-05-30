import { registerPlugin } from '@capacitor/core';

import type { DevelopmentModePlugin } from './definitions';

const developmentmodeplugin = registerPlugin<DevelopmentModePlugin>('DevelopmentModePlugin', {
  web: () => import('./web').then((m) => new m.DevelopmentModePluginWeb()),
});


export * from './definitions';
export { developmentmodeplugin };
