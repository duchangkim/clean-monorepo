import { CounterRepository } from '../counterRepository.interface';
import { DeleteCounterUsecase } from './interface/deleteCounter';

export class DeleteCounterUsecaseImpl implements DeleteCounterUsecase {
  private counterRepository: CounterRepository;

  constructor(counterRepository: CounterRepository) {
    this.counterRepository = counterRepository;
  }

  execute(counterId: string): void {
    return this.counterRepository.deleteCounter(counterId);
  }
}
