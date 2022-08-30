import { Usecase } from '@core/common/usecase';
import { Counter } from '@core/counter/entity/counter.entity';

export abstract class DecrementCounterUsecase implements Usecase<void> {
  abstract execute(counter: Counter): void;
}
