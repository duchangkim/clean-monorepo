import { Container } from 'inversify';
import { counter } from '@peterpan/domain';
import * as di from '@peterpan/di';

import { LocalStorageServiceImpl } from '../service/localStorageService';
import { COUNTER_IDENTIFIER } from '../constant/counter/identifier';

const localStorageServiceImpl = new LocalStorageServiceImpl();
const counterFactory = new di.CounterFactory(localStorageServiceImpl);

const container = new Container();

container
  .bind<counter.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase)
  .toConstantValue(counterFactory.getCreateCounterUsecase());

container
  .bind<counter.DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase)
  .toConstantValue(counterFactory.getDeleteCounterUsecase());

container
  .bind<counter.IncrementCounterUsecase>(COUNTER_IDENTIFIER.IncrementCounterUsecase)
  .toConstantValue(counterFactory.getIncrementCounterUsecase());

container
  .bind<counter.DecrementCounterUsecase>(COUNTER_IDENTIFIER.DecrementCounterUsecase)
  .toConstantValue(counterFactory.getDecrementCounterUsecase());

container
  .bind<counter.GetAllCountersUsecase>(COUNTER_IDENTIFIER.GetAllCountersUsecase)
  .toConstantValue(counterFactory.getGetAllCountersUsecase());

export default container;
