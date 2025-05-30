import { registerPlugin } from '@capacitor/core';

import type { DevelopmentModePlugin } from './definitions';

const developmentmodeplugin = registerPlugin<DevelopmentModePlugin>('developmentmodeplugin', {
  web: () => import('./web').then((m) => new m.developmentmodepluginWeb()),
});


export * from './definitions';
export { developmentmodeplugin };
