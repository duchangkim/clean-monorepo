import { Usecase } from '../../../common/usecase';
import { Counter } from '../../entity/counter.entity';

export abstract class GetAllCountersUsecase implements Usecase<Counter[]> {
  abstract execute(): Counter[];
}
