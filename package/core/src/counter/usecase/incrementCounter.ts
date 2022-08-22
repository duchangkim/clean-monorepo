import { CounterRepository } from '../counterRepository.interface';

import { Counter } from '../entity/counter.entity';
import { IncrementCounterUsecase } from './interface/incrementCounter';

export class IncrementCounterUsecaseImpl implements IncrementCounterUsecase {
  private counterRepo: CounterRepository;

  constructor(counterRepo: CounterRepository) {
    this.counterRepo = counterRepo;
  }

  execute(counter: Counter): void {
    this.counterRepo.updateCounter({ ...counter, currentCount: counter.currentCount + counter.incrementAmount });
  }
}
