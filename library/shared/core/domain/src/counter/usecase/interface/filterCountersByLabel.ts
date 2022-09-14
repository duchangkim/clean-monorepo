import { UseCase } from '../../../common/useCase';
import { Counter } from '../../entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements UseCase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
