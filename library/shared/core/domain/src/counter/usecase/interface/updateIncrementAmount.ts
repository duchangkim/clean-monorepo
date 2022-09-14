import { UseCase } from '../../../common/useCase';
import { Counter } from '../../entity/counter.entity';

export abstract class UpdateIncrementAmountUsecase implements UseCase<void> {
  abstract execute(updatedCounter: Counter): void;
}
