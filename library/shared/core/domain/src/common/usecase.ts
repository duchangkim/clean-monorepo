/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class UseCase<T> {
  abstract execute(...args: any[]): T;
}
