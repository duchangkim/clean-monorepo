/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class Usecase<T> {
  abstract execute(...args: any[]): T;
}
