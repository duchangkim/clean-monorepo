import { Counter } from '@peterpan/shared-core-domain';

import './CounterCard.scss';

export interface ReactExampleUiCounterProps {
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
}: ReactExampleUiCounterProps) {
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
