import * as core from "core";
import { useInjection } from "inversify-react";
import { useState } from "react";
import { COUNTER_IDENTIFIER } from "../../constant/counter/identifier";

export const useCounterController = function useCounterControllerCustomHook() {
    const [counterList, setCounterList] = useState<core.Counter[]>([]);
    const createCounterUseCase = useInjection<core.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase);
    const deleteCounterUseCase = useInjection<core.DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase);
    const incrementCounterUseCase = useInjection<core.IncrementCounterUsecase>(
        COUNTER_IDENTIFIER.IncrementCounterUsecase
    );
    const decrementCounterUseCase = useInjection<core.DecrementCounterUsecase>(
        COUNTER_IDENTIFIER.DecrementCounterUsecase
    );

    
};
