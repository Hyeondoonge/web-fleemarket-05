import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_URL } from 'constants/url.contant';

export default function HomePage() {
  return (
    <div>
      Home
      <Link to={PAGE_URL.SIGN_IN}>로그인</Link>
    </div>
  );
}
