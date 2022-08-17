import * as core from "core";

import React, { useEffect, useRef, useState } from "react";

import { useInjection } from "inversify-react";
import { COUNTER_IDENTIFIER } from "../../constant/counter/identifier";

export function CounterList() {
    const [counterList, setCounterList] = useState<core.Counter[]>([]);
    const counterListRef = useRef<HTMLElement>(null);
    const createCounterUseCase = useInjection<core.CreateCounterUsecase>(COUNTER_IDENTIFIER.CreateCounterUsecase);

    const scrollCounterListToBottom = () => {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: document.documentElement.scrollHeight,
            });
        });
    };

    const handleCreateCounterButtonClick = () => {
        const newCounter = createCounterUseCase.execute();

        console.log(newCounter);
        setCounterList([...counterList, newCounter]);
    };

    useEffect(() => {
        scrollCounterListToBottom();
    }, [counterList.length]);

    return (
        <main ref={counterListRef}>
            {counterList.length > 0 ? (
                counterList.map((counter) => (
                    <div key={counter.id}>
                        <div>id: {counter.id}</div>
                        <div>label: {counter.label}</div>
                        <div>{counter.currentCount}</div>
                    </div>
                ))
            ) : (
                <div>아무것도 없음</div>
            )}
        </main>
    );
}
