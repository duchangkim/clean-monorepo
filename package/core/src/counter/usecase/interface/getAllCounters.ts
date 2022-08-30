import { Usecase } from '@core/common/usecase';
import { Counter } from '@core/counter/entity/counter.entity';

export abstract class GetAllCountersUsecase implements Usecase<Counter[]> {
  abstract execute(): Counter[];
}
