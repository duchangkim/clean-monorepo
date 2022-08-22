import { CounterRepository } from '../counterRepository.interface';

import { Counter } from '../entity/counter.entity';
import { GetAllCountersUsecase } from './interface/getAllCounters';

export class GetAllCountersUsecaseImpl implements GetAllCountersUsecase {
  private counterRepository: CounterRepository;

  constructor(counterRepository: CounterRepository) {
    this.counterRepository = counterRepository;
  }

  execute(): Counter[] {
    return this.counterRepository.getAllCounters();
  }
}
