import { Usecase } from '../../../common/usecase';
import { Counter } from '../../entity/counter.entity';

export abstract class DecrementCounterUsecase implements Usecase<void> {
  abstract execute(counter: Counter): void;
}
