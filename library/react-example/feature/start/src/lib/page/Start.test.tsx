import { render } from '@testing-library/react';

import ReactExampleFeatureStart from './Start';

describe('ReactExampleFeatureStart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactExampleFeatureStart />);
    expect(baseElement).toBeTruthy();
  });
});
