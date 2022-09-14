import { render } from '@testing-library/react';

import { ReactExampleFeatureLogin } from './Login';

describe('ReactExampleFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactExampleFeatureLogin />);
    expect(baseElement).toBeTruthy();
  });
});
