import { useInjection } from 'inversify-react';
import { useCallback, useState } from 'react';

import {
  Counter,
  CreateCounterUsecase,
  DecrementCounterUsecase,
  DeleteCounterUsecase,
  GetAllCountersUsecase,
  IncrementCounterUsecase,
} from '@peterpan/shared-core-domain';

import { COUNTER_IDENTIFIER } from '../../constant/counter/identifier';

export const useCounterList = function useCounterListCustomHook() {
  const [counterList, setCounterList] = useState<Counter[]>([]);
  const createCounterUseCase = useInjection<CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase);
  const deleteCounterUseCase = useInjection<DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase);
  const incrementCounterUseCase = useInjection<IncrementCounterUsecase>(COUNTER_IDENTIFIER.IncrementCounterUsecase);
  const decrementCounterUseCase = useInjection<DecrementCounterUsecase>(COUNTER_IDENTIFIER.DecrementCounterUsecase);
  const getCounterListUseCase = useInjection<GetAllCountersUsecase>(COUNTER_IDENTIFIER.GetAllCountersUsecase);

  const handleCreateCounter = function excuteCreateCounterUseCase() {
    const newCounter = createCounterUseCase.execute();
    setCounterList([...counterList, newCounter]);
  };

  const handleDeleteCounter = function excuteDeleteCounterUseCase(deletedCounterId: string) {
    deleteCounterUseCase.execute(deletedCounterId);

    setCounterList(counterList.filter((counter) => counter.id !== deletedCounterId));
  };

  const handleDecrementCounter = function excuteDecrementCounterUseCase(counter: Counter) {
    decrementCounterUseCase.execute(counter);

    const updatedCounterList = counterList.map((counterItem) => {
      if (counterItem.id !== counter.id) return counterItem;

      const calculatedCount = counterItem.currentCount - counterItem.incrementAmount;

      return {
        ...counterItem,
        currentCount: calculatedCount,
      };
    });

    setCounterList(updatedCounterList);
  };

  const handleIncrementCounter = function excuteIncrementCounterUseCase(counter: Counter) {
    incrementCounterUseCase.execute(counter);

    const updatedCounterList = counterList.map((counterItem) => {
      if (counterItem.id !== counter.id) return counterItem;

      const calculatedCount = counterItem.currentCount + counterItem.incrementAmount;

      return {
        ...counterItem,
        currentCount: calculatedCount,
      };
    });

    setCounterList(updatedCounterList);
  };

  const handleGetCounterList = useCallback(
    function excuteGetCounterListUseCase() {
      const counterList = getCounterListUseCase.execute();

      setCounterList(counterList);
    },
    [getCounterListUseCase],
  );

  return {
    counterList,
    handleCreateCounter,
    handleDeleteCounter,
    handleDecrementCounter,
    handleIncrementCounter,
    handleGetCounterList,
  };
};
