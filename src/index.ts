import { registerPlugin } from '@capacitor/core';

import type { developmentmodepluginPlugin } from './definitions';

const developmentmodeplugin = registerPlugin<developmentmodepluginPlugin>('developmentmodeplugin', {
  web: () => import('./web').then((m) => new m.developmentmodepluginWeb()),
});


export * from './definitions';
export { developmentmodeplugin };
