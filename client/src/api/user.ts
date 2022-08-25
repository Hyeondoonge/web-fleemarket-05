import { User } from 'types/user';
import { query } from 'utils/api.util';
import { API_URL } from 'constants/url.constant';

export async function requestMyProfile() {
  const data = await query<User>(API_URL.MY_PROFILE);
  return data;
}
