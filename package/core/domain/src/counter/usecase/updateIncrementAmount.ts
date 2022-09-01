import { CounterRepository } from '../counterRepository.interface';

import { Counter } from '../entity/counter.entity';
import { UpdateIncrementAmountUsecase } from './interface/updateIncrementAmount';

export class UpdateIncrementAmountUsecaseImpl implements UpdateIncrementAmountUsecase {
  private counterRepo: CounterRepository;

  constructor(counterRepo: CounterRepository) {
    this.counterRepo = counterRepo;
  }

  execute(updatedCounter: Counter): void {
    const newIncrementIsPositive = this.confirmIsPositive(updatedCounter.incrementAmount);

    if (!newIncrementIsPositive) throw new Error('New increment amount must be a positive number (> 0)');

    this.counterRepo.updateCounter({
      ...updatedCounter,
      incrementAmount: Math.abs(updatedCounter.incrementAmount),
    });
  }

  private confirmIsPositive(num: number): boolean {
    return num > 0;
  }
}
