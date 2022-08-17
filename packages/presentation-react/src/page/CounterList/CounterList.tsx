import * as core from "core";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { useInjection } from "inversify-react";
import { COUNTER_IDENTIFIER } from "../../constant/counter/identifier";
import { Counter } from "./Counter";

import "./CounterList.css";

export function CounterList() {
    const [counterList, setCounterList] = useState<core.Counter[]>([]);
    const scrollBoxRef = useRef<HTMLDivElement>(null);
    const createCounterUseCase = useInjection<core.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase);
    const deleteCounterUseCase = useInjection<core.DeleteCounterUsecase>(COUNTER_IDENTIFIER.DeleteCounterUsecase);
    const incrementCounterUseCase = useInjection<core.IncrementCounterUsecase>(
        COUNTER_IDENTIFIER.IncrementCounterUsecase
    );
    const decrementCounterUseCase = useInjection<core.DecrementCounterUsecase>(
        COUNTER_IDENTIFIER.DecrementCounterUsecase
    );
    const getCounterListUseCase = useInjection<core.GetAllCountersUsecase>(COUNTER_IDENTIFIER.GetAllCountersUsecase);

    const scrollCounterListToBottom = () => {
        setTimeout(() => {
            scrollBoxRef.current?.scrollTo({
                behavior: "smooth",
                top: scrollBoxRef.current.scrollHeight,
            });
        });
    };

    const handleCreateCounterButtonClick = () => {
        const newCounter = createCounterUseCase.execute();

        console.log(newCounter);
        setCounterList([...counterList, newCounter]);

        scrollCounterListToBottom();
    };

    const handleDeleteCounterButtonClick = (deletedCounterId: string) => {
        const confirmsDeleteCounter = window.confirm("정말로 카운터를 삭제할까요?");

        if (!confirmsDeleteCounter) return;

        deleteCounterUseCase.execute(deletedCounterId);

        setCounterList(counterList.filter((counter) => counter.id !== deletedCounterId));
    };

    const handleDecrementButtonClick = (counter: core.Counter) => {
        decrementCounterUseCase.execute(counter);

        const updatedCounterList = counterList.map((counterItem) => {
            if (counterItem.id !== counter.id) return counterItem;

            counterItem.currentCount = counterItem.currentCount - counterItem.incrementAmount;

            return counterItem;
        });

        setCounterList(updatedCounterList);
    };

    const handleIncrementButtonClick = (counter: core.Counter) => {
        incrementCounterUseCase.execute(counter);

        const updatedCounterList = counterList.map((counterItem) => {
            if (counterItem.id !== counter.id) return counterItem;

            counterItem.currentCount = counterItem.currentCount + counterItem.incrementAmount;

            return counterItem;
        });

        setCounterList(updatedCounterList);
    };

    const getCounterList = useCallback(() => {
        const counterList = getCounterListUseCase.execute();

        setCounterList(counterList);
    }, [getCounterListUseCase]);

    useEffect(() => {
        getCounterList();
    }, [getCounterList]);

    return (
        <main className="counter-list-wrapper">
            <button onClick={handleCreateCounterButtonClick}>카운터 만들기</button>
            <div className="scroll-box" ref={scrollBoxRef}>
                {counterList.length > 0 ? (
                    counterList.map((counter) => (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            handleDecrementButtonClick={() => handleDecrementButtonClick(counter)}
                            handleIncrementButtonClick={() => handleIncrementButtonClick(counter)}
                            handleDeleteCounterButtonClick={() => handleDeleteCounterButtonClick(counter.id)}
                        />
                    ))
                ) : (
                    <div>아무것도 없음</div>
                )}
            </div>
        </main>
    );
}
