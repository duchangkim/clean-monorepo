import { CounterRepository } from '../counterRepository.interface';

import { Counter } from '../entity/counter.entity';
import { UpdateDecrementAmountUsecase } from './interface/updateDecrementAmount';

export class UpdateDecrementAmountUsecaseImpl implements UpdateDecrementAmountUsecase {
  private counterRepo: CounterRepository;

  constructor(counterRepo: CounterRepository) {
    this.counterRepo = counterRepo;
  }

  execute(updatedCounter: Counter): void {
    const newDecrementIsPositive = this.confirmIsPositive(updatedCounter.decrementAmount);

    if (!newDecrementIsPositive) throw new Error('New decrement amount must be a positive number (> 0)');

    this.counterRepo.updateCounter({
      ...updatedCounter,
      decrementAmount: Math.abs(updatedCounter.decrementAmount),
    });
  }

  private confirmIsPositive(num: number): boolean {
    return num > 0;
  }
}
