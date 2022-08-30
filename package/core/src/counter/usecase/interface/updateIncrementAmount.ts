import { Usecase } from '@core/common/usecase';
import { Counter } from '@core/counter/entity/counter.entity';

export abstract class UpdateIncrementAmountUsecase implements Usecase<void> {
  abstract execute(updatedCounter: Counter): void;
}
