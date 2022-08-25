import { requestMyProfile } from 'api/user';
import { selector } from 'recoil';

export const currentUserValue = selector({
  key: 'CurrentUserValue',
  get: async () => {
    try {
      const user = await requestMyProfile();
      return {
        user,
        isLoggedIn: true,
      };
    } catch (error) {
      return {
        user: null,
        isLoggedIn: false,
      };
    }
  },
});
