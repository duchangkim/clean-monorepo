import { Usecase } from '@domain/common/usecase';
import { Counter } from '@domain/counter/entity/counter.entity';

export abstract class CreateCounterUsecase implements Usecase<Counter> {
  abstract execute(): Counter;
}
