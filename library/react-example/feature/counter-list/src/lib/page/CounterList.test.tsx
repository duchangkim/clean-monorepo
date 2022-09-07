import { render } from '@testing-library/react';

import ReactExampleFeatureCounterList from './CounterList';

describe('ReactExampleFeatureCounterList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactExampleFeatureCounterList />);
    expect(baseElement).toBeTruthy();
  });
});
