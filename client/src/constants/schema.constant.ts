import * as yup from 'yup';
import { VALIDATION_MESSAGE } from './message.constant';
import { PASSWORD_REGEX, USERNAME_REGEX } from './regex.constant';

export const EMAIL_SIGN_IN_SCHEMA = yup.object({
  email: yup
    .string()
    .email(VALIDATION_MESSAGE.INVALID_EMAIL)
    .required(VALIDATION_MESSAGE.REQUIRED_FIELD),
  password: yup.string().required(VALIDATION_MESSAGE.REQUIRED_FIELD),
});

export type EmailSignInSchema = yup.InferType<typeof EMAIL_SIGN_IN_SCHEMA>;

export const EMAIL_SIGN_UP_SCHEMA = yup.object({
  username: yup
    .string()
    .matches(USERNAME_REGEX, VALIDATION_MESSAGE.INVALID_USERNAME)
    .required(VALIDATION_MESSAGE.REQUIRED_FIELD),
  email: yup
    .string()
    .email(VALIDATION_MESSAGE.INVALID_EMAIL)
    .required(VALIDATION_MESSAGE.REQUIRED_FIELD),
  password: yup.string().matches(PASSWORD_REGEX).required(VALIDATION_MESSAGE.REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], VALIDATION_MESSAGE.CONFIRM_PASSWORD)
    .required(VALIDATION_MESSAGE.REQUIRED_FIELD),
});

export type EmailSignUpSchema = yup.InferType<typeof EMAIL_SIGN_UP_SCHEMA>;
