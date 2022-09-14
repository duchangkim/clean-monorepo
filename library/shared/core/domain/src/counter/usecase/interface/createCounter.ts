import { UseCase } from '../../../common/useCase';
import { Counter } from '../../entity/counter.entity';

export abstract class CreateCounterUsecase implements UseCase<Counter> {
  abstract execute(): Counter;
}
