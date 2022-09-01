import { Counter, CounterRepository } from '@peterpan/shared-core-domain';
import { LocalStorageService } from '../common/localStorageService.interface';

export class CounterRepositoryImpl implements CounterRepository {
  get counterIds(): string[] {
    const counterIds = JSON.parse(this.localStorageService.get('counter-ids'));

    /** for app being used for first time */

    // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
    if (counterIds == null) [];

    return counterIds.ids;
  }

  set counterIds(newIds: string[]) {
    this.localStorageService.set('counter-ids', JSON.stringify({ ids: newIds }));
  }

  constructor(private localStorageService: LocalStorageService) {
    try {
      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      this.counterIds;
    } catch (e: unknown) {
      this.counterIds = [];
    }
  }

  getCounter(counterId: string): Counter {
    return JSON.parse(this.localStorageService.get(counterId));
  }

  createCounter(counterInfo: Counter): Counter {
    this.localStorageService.set(counterInfo.id, JSON.stringify(counterInfo));

    this.addCounterId(counterInfo.id);

    return counterInfo;
  }

  getAllCounters(): Counter[] {
    return this.counterIds.map((id) => this.getCounterById(id));
  }

  updateCounter(counter: Counter): void {
    this.localStorageService.set(counter.id, JSON.stringify(counter));
  }

  deleteCounter(counterId: string): void {
    this.localStorageService.set(counterId, '');

    this.counterIds = this.counterIds.filter((id) => id !== counterId);
  }

  private addCounterId(counterId: string): void {
    this.counterIds = [...this.counterIds, counterId];
  }

  private getCounterById(counterId: string): Counter {
    return JSON.parse(this.localStorageService.get(counterId));
  }
}
