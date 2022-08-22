import { Usecase } from 'src/common/usecase';
import { Counter } from 'src/counter/entity/counter.entity';

export abstract class CreateCounterUsecase implements Usecase<Counter> {
  abstract execute(): Counter;
}
