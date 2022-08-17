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

export default container;
