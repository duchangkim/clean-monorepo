import { Usecase } from '../../../common/usecase';
import { Counter } from '../../entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
