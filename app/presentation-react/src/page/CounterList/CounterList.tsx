import { useEffect, useRef } from 'react';

import { Counter } from './Counter';
import { useCounterList } from './useCounterList';

import './CounterList.css';

export function CounterList() {
  const {
    counterList,
    handleCreateCounter,
    handleDeleteCounter,
    handleDecrementCounter,
    handleIncrementCounter,
    handleGetCounterList,
  } = useCounterList();

  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const scrollCounterListToBottom = () => {
    setTimeout(() => {
      scrollBoxRef.current?.scrollTo({
        behavior: 'smooth',
        top: scrollBoxRef.current.scrollHeight,
      });
    });
  };

  const handleCreateCounterButtonClick = () => {
    handleCreateCounter();
    scrollCounterListToBottom();
  };

  const handleDeleteCounterButtonClick = (deletedCounterId: string) => {
    const confirmsDeleteCounter = window.confirm('정말로 카운터를 삭제할까요?');

    if (!confirmsDeleteCounter) return;

    handleDeleteCounter(deletedCounterId);
  };

  useEffect(() => {
    handleGetCounterList();
  }, [handleGetCounterList]);

  return (
    <main className="counter-list-wrapper">
      <button type="button" onClick={handleCreateCounterButtonClick}>
        카운터 만들기
      </button>
      <div className="scroll-box" ref={scrollBoxRef}>
        {counterList.length > 0 ? (
          counterList.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              handleDecrementButtonClick={() => handleDecrementCounter(counter)}
              handleIncrementButtonClick={() => handleIncrementCounter(counter)}
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
