import { Usecase } from '@core/common/usecase';
import { Counter } from '@core/counter/entity/counter.entity';

export abstract class CreateCounterUsecase implements Usecase<Counter> {
  abstract execute(): Counter;
}
