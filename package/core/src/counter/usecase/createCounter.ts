import { CounterRepository } from '../counterRepository.interface';

import { Counter } from '../entity/counter.entity';
import { CreateCounterUsecase } from './interface/createCounter';

export class CreateCounterUsecaseImpl implements CreateCounterUsecase {
  private counterRepository: CounterRepository;

  constructor(counterRepository: CounterRepository) {
    this.counterRepository = counterRepository;
  }

  execute(): Counter {
    return this.counterRepository.createCounter({
      id: Math.random().toString().substring(2),
      currentCount: 0,
      decrementAmount: 1,
      incrementAmount: 1,
      label: 'New Counter',
    });
  }
}
