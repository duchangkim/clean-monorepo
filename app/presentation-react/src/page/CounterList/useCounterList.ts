import * as core from "core";
import { useInjection } from "inversify-react";
import { useCallback, useState } from "react";
import { COUNTER_IDENTIFIER } from "../../constant/counter/identifier";

export const useCounterList = function useCounterListCustomHook() {
  const [counterList, setCounterList] = useState<core.Counter[]>([]);
  const createCounterUseCase = useInjection<core.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase);
  const deleteCounterUseCase = useInjection<core.DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase);
  const incrementCounterUseCase = useInjection<core.IncrementCounterUsecase>(
    COUNTER_IDENTIFIER.IncrementCounterUsecase
  );
  const decrementCounterUseCase = useInjection<core.DecrementCounterUsecase>(
    COUNTER_IDENTIFIER.DecrementCounterUsecase
  );
  const getCounterListUseCase = useInjection<core.GetAllCountersUsecase>(COUNTER_IDENTIFIER.GetAllCountersUsecase);

  const handleCreateCounter = function excuteCreateCounterUseCase() {
    const newCounter = createCounterUseCase.execute();
    setCounterList([...counterList, newCounter]);
  };

  const handleDeleteCounter = function excuteDeleteCounterUseCase(deletedCounterId: string) {
    deleteCounterUseCase.execute(deletedCounterId);

    setCounterList(counterList.filter((counter) => counter.id !== deletedCounterId));
  };

  const handleDecrementCounter = function excuteDecrementCounterUseCase(counter: core.Counter) {
    decrementCounterUseCase.execute(counter);

    const updatedCounterList = counterList.map((counterItem) => {
      if (counterItem.id !== counter.id) return counterItem;

      counterItem.currentCount = counterItem.currentCount - counterItem.incrementAmount;

      return counterItem;
    });

    setCounterList(updatedCounterList);
  };

  const handleIncrementCounter = function excuteIncrementCounterUseCase(counter: core.Counter) {
    incrementCounterUseCase.execute(counter);

    const updatedCounterList = counterList.map((counterItem) => {
      if (counterItem.id !== counter.id) return counterItem;

      counterItem.currentCount = counterItem.currentCount + counterItem.incrementAmount;

      return counterItem;
    });

    setCounterList(updatedCounterList);
  };

  const handleGetCounterList = useCallback(
    function excuteGetCounterListUseCase() {
      const counterList = getCounterListUseCase.execute();

      setCounterList(counterList);
    },
    [getCounterListUseCase]
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
