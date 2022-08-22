import { Usecase } from 'src/common/usecase';
import { Counter } from 'src/counter/entity/counter.entity';

export abstract class IncrementCounterUsecase implements Usecase<void> {
  abstract execute(counter: Counter): void;
}
