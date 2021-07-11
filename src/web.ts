import { WebPlugin } from '@capacitor/core';

import type { JeepBugPlugin } from './definitions';

export class JeepBugWeb extends WebPlugin implements JeepBugPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
