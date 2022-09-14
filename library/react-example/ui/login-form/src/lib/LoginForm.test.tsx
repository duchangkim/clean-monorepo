import { render } from '@testing-library/react';

import ReactExampleUiLoginForm from './LoginForm';

describe('ReactExampleUiLoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactExampleUiLoginForm />);
    expect(baseElement).toBeTruthy();
  });
});
