import { Usecase } from '@domain/common/usecase';
import { Counter } from '@domain/counter/entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
