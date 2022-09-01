import { Usecase } from '@domain/common/usecase';
import { Counter } from '@domain/counter/entity/counter.entity';

export abstract class IncrementCounterUsecase implements Usecase<void> {
  abstract execute(counter: Counter): void;
}
