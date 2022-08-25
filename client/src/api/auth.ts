import { mutation } from 'utils/api.util';
import { API_URL } from 'constants/url.constant';
import { EmailSignInSchema } from 'constants/schema.constant';

export async function requestEmailSignIn({ email, password }: EmailSignInSchema) {
  const data = await mutation<EmailSignInSchema>({
    url: API_URL.EMAIL_SIGN_IN,
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  return data;
}
