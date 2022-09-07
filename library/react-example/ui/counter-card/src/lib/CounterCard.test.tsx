import { render } from '@testing-library/react';

import { CounterCard } from './CounterCard';

describe('CounterCard가 올바르게 렌더 되었는가', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CounterCard />);
    expect(baseElement).toBeTruthy();
  });
});
