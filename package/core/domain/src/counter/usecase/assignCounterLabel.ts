import { CounterRepository } from '../counterRepository.interface';
import { Counter } from '../entity/counter.entity';
import { AssignCounterLabelUsecase } from './interface/assignCounterLabel';

// core에서 data계층으로는 접근이 불가능함.
// import * as a from '@peterpan/package/di';
// import * as data from '../../../../data/src/index';

export class AssignCounterLabelUsecaseImpl implements AssignCounterLabelUsecase {
  private counterRepo: CounterRepository;

  constructor(counterRepo: CounterRepository) {
    this.counterRepo = counterRepo;
  }

  execute(updatedCounter: Counter): void {
    const labelIsEmpty = this.confirmIsNotEmpty(updatedCounter.label);

    if (labelIsEmpty) throw new Error(`Given label cannot be empty. Received ${updatedCounter.label}`);

    this.counterRepo.updateCounter(updatedCounter);
  }

  private confirmIsNotEmpty(label: string): boolean {
    return label == null || label.length === 0;
  }
}
