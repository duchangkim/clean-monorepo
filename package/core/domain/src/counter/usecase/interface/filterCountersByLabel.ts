import { Usecase } from 'package/core/domain/src/common/usecase';
import { Counter } from 'package/core/domain/src/counter/entity/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
  abstract execute(counters: Counter[], filterLabel: string): Counter[];
}
