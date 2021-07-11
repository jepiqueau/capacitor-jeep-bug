import { registerPlugin } from '@capacitor/core';

import type { JeepBugPlugin } from './definitions';

const JeepBug = registerPlugin<JeepBugPlugin>('JeepBug', {
  web: () => import('./web').then(m => new m.JeepBugWeb()),
});

export * from './definitions';
export { JeepBug };
