// The entry file of your WebAssembly module.

import { console } from './imports';

export function func(): void {
  console.logi(1);
  console.logf(1.2);
  console.logs('a');
}
