import { Usecase } from 'src/common/usecase';
import { Counter } from 'src/counter/entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
