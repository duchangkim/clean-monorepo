import { Usecase } from 'src/common/usecase';
import { Counter } from 'src/counter/entity/counter.entity';

export abstract class UpdateIncrementAmountUsecase implements Usecase<void> {
  abstract execute(updatedCounter: Counter): void;
}
