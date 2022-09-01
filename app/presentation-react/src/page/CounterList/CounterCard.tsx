import { Counter } from '@peterpan/domain';

import './Counter.css';

export interface CounterProps {
  counter: Counter;
  handleDecrementButtonClick: () => void;
  handleIncrementButtonClick: () => void;
  handleDeleteCounterButtonClick: () => void;
}

export const CounterCard = function CounterFuntionComponent({
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
          <button type="button">
            <span role="img" aria-label="스패너 이모지">
              🔧
            </span>
          </button>
          <button type="button" onClick={handleDeleteCounterButtonClick}>
            <span role="img" aria-label="X표시 이모지">
              ❌
            </span>
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
