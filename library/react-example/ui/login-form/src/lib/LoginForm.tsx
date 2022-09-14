import React from 'react';
import './LoginForm.scss';

export interface LoginFormProps {
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const defaultHandleSubmit = function defaultHandleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // eslint-disable-next-line no-console
  console.log('기본값 이벤트 입니다.');
};

export const LoginForm = function LoginFormFunctionComponent({ handleSubmit = defaultHandleSubmit }: LoginFormProps) {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="id" className="login-form__label">
        <span>ID</span>
        <input id="id" type="text" required className="login-form__input" />
      </label>
      <label htmlFor="password" className="login-form__label">
        <span>Password</span>
        <input id="password" type="password" required className="login-form__input" />
      </label>
      <button type="submit" className="login-form__button">
        로그인
      </button>
    </form>
  );
};
