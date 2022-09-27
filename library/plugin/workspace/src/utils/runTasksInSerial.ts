import type { GeneratorCallback } from '@nrwl/devkit';

export function runTasksInSerial(...tasks: GeneratorCallback[]): GeneratorCallback {
  return async () => {
    tasks.forEach(async (task) => {
      await task();
    });
  };
}
