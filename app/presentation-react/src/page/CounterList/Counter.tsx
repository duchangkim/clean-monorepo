import React from 'react';
import * as core from '@peterpan/core';

import './Counter.css';

export interface CounterProps {
  counter: core.Counter;
  handleDecrementButtonClick: () => void;
  handleIncrementButtonClick: () => void;
  handleDeleteCounterButtonClick: () => void;
}

export const Counter = function CounterFuntionComponent({
  counter,
  handleDecrementButtonClick,
  handleIncrementButtonClick,
  handleDeleteCounterButtonClick,
}: CounterProps) {
  return (
    <div className="counter-box">
      <div className="top">
        <div>
          {counter.label} / ID: {counter.id}
        </div>
        <div className="button-box">
          <button type="button">🔧</button>
          <button type="button" onClick={handleDeleteCounterButtonClick}>
            ❌
          </button>
        </div>
      </div>
      <div className="middle">{counter.currentCount}</div>
      <div className="bottom">
        <button type="button" onClick={handleDecrementButtonClick}>
          dec -1
        </button>
        <button type="button" onClick={handleIncrementButtonClick}>
          inc +1
        </button>
      </div>
    </div>
  );
};
