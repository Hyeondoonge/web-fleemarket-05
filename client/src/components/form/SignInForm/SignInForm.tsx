import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/common/Button';
import AuthInput from 'components/common/AuthInput';
import { EmailLoginSchema, EMAIL_LOGIN_SCHEMA } from 'constants/schema.constant';
import * as Styled from './SignInForm.styled';

interface SignInFormProps {
  onSubmit?: (data: EmailLoginSchema) => void;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty, errors },
  } = useForm<EmailLoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(EMAIL_LOGIN_SCHEMA),
  });

  return (
    <Styled.Form onSubmit={onSubmit && handleSubmit(onSubmit)}>
      <AuthInput
        id="email"
        type="email"
        placeholder="이메일을 입력하세요."
        errorMessage={errors.email?.message}
        autoComplete="off"
        autoFocus
        {...register('email')}
      />
      <AuthInput
        id="password"
        type="password"
        placeholder="비밀번호를 입력하세요."
        errorMessage={errors.password?.message}
        autoComplete="off"
        {...register('password')}
      />
      <Button type="submit" size="xl" disabled={!isValid || !isDirty}>
        로그인
      </Button>
    </Styled.Form>
  );
}
