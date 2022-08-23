import { IconType } from 'components/common/Icon/Icon';
import { PAGE_URL } from 'constants/url.contant';

interface MenuButton {
  icon: { clicked: IconType; unClicked: IconType };
  title: string;
  to: string;
}

export const MENU_LIST: MenuButton[] = [
  {
    icon: { clicked: 'HomeFilledIcon', unClicked: 'HomeOutlineIcon' },
    title: '홈',
    to: PAGE_URL.HOME,
  },
  {
    icon: { clicked: 'StoreFilledIcon', unClicked: 'StoreOutlineIcon' },
    title: '판매목록',
    to: PAGE_URL.MY_ARTICLES,
  },
  {
    icon: { clicked: 'ChatFilledIcon', unClicked: 'ChatOutlineIcon' },
    title: '채팅',
    to: PAGE_URL.MY_CHATS,
  },
  {
    icon: { clicked: 'HeartFilledIcon', unClicked: 'HeartOutlineIcon' },
    title: '관심목록',
    to: PAGE_URL.MY_LIKES,
  },
  {
    icon: { clicked: 'UserFilledIcon', unClicked: 'UserOutlineIcon' },
    title: '내정보',
    to: PAGE_URL.MY_PAGE,
  },
];
