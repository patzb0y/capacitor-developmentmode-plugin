import { WebPlugin } from '@capacitor/core';

import type { developmentmodepluginPlugin } from './definitions';

export class developmentmodepluginWeb extends WebPlugin implements developmentmodepluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
