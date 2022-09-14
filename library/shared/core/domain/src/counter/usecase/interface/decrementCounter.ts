import { UseCase } from '../../../common/useCase';
import { Counter } from '../../entity/counter.entity';

export abstract class DecrementCounterUsecase implements UseCase<void> {
  abstract execute(counter: Counter): void;
}
