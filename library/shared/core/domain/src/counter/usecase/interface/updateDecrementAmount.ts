import { UseCase } from '../../../common/useCase';
import { Counter } from '../../entity/counter.entity';

export abstract class UpdateDecrementAmountUsecase implements UseCase<void> {
  abstract execute(updatedCounter: Counter): void;
}
