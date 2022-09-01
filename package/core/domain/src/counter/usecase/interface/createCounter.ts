import { Usecase } from '../../../common/usecase';
import { Counter } from '../../entity/counter.entity';

export abstract class CreateCounterUsecase implements Usecase<Counter> {
  abstract execute(): Counter;
}
