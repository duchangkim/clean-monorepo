import { Container } from 'inversify';
import * as core from 'core';
import * as di from 'di';

import { LocalStorageServiceImpl } from '../service/localStorageService';
import { COUNTER_IDENTIFIER } from '../constant/counter/identifier';

const localStorageServiceImpl = new LocalStorageServiceImpl();
const counterFactory = new di.CounterFactory(localStorageServiceImpl);

const container = new Container();

container
  .bind<core.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase)
  .toConstantValue(counterFactory.getCreateCounterUsecase());

container
  .bind<core.DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase)
  .toConstantValue(counterFactory.getDeleteCounterUsecase());

container
  .bind<core.IncrementCounterUsecase>(COUNTER_IDENTIFIER.IncrementCounterUsecase)
  .toConstantValue(counterFactory.getIncrementCounterUsecase());

container
  .bind<core.DecrementCounterUsecase>(COUNTER_IDENTIFIER.DecrementCounterUsecase)
  .toConstantValue(counterFactory.getDecrementCounterUsecase());

container
  .bind<core.GetAllCountersUsecase>(COUNTER_IDENTIFIER.GetAllCountersUsecase)
  .toConstantValue(counterFactory.getGetAllCountersUsecase());

export default container;
