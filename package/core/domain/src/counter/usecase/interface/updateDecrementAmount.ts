import { Usecase } from '@domain/common/usecase';
import { Counter } from '@domain/counter/entity/counter.entity';

export abstract class UpdateDecrementAmountUsecase implements Usecase<void> {
  abstract execute(updatedCounter: Counter): void;
}
