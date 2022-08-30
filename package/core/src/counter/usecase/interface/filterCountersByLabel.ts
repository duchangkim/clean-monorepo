import { Usecase } from '@core/common/usecase';
import { Counter } from '@core/counter/entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
