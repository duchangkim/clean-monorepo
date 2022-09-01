import { Usecase } from '../../../common/usecase';
import { Counter } from '../../entity/counter.entity';

export abstract class AssignCounterLabelUsecase implements Usecase<void> {
  abstract execute(updatedCounter: Counter): void;
}
