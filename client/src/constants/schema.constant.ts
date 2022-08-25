import * as yup from 'yup';
import { VALIDATION_MESSAGE } from './message.constant';

export const EMAIL_SIGN_IN_SCHEMA = yup.object({
  email: yup
    .string()
    .email(VALIDATION_MESSAGE.WRONG_EMAIL)
    .required(VALIDATION_MESSAGE.REQUIRED_FIELD),
  password: yup.string().required(VALIDATION_MESSAGE.REQUIRED_FIELD),
});

export type EmailSignInSchema = yup.InferType<typeof EMAIL_SIGN_IN_SCHEMA>;
