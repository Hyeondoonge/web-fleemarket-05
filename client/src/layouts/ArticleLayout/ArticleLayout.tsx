import React from 'react';
import Header from 'components/common/Header';
import useArticleQuery from 'hooks/useArticleQuery';
import Scrollable from 'components/common/Scrollable';
import Icon from 'components/common/Icon';
import Dropdown from 'components/common/Dropdown';
import { DropdownButton, DropdownMenus, DropdownMenu } from './ArticleLayout.styled';
import { useNavigate } from 'react-router-dom';
import { PAGE_URL } from 'constants/url.constant';

interface AritcleLayoutProps {
  children?: React.ReactNode;
}

export default function ArticleLayout({ children }: AritcleLayoutProps) {
  const navigate = useNavigate();
  const { article, isMyArticle } = useArticleQuery();

  return (
    <>
      <Header absolute={!!article}>
        <Header.AnimatedBackground />
        <Header.Inner>
          <Header.BackwardButton />
        </Header.Inner>
        <Header.Inner>
          {isMyArticle && (
            <Dropdown>
              <DropdownButton>
                <Icon icon="OptionIcon" size={24} />
              </DropdownButton>
              <DropdownMenus>
                <DropdownMenu onClick={() => navigate(PAGE_URL.EDIT_ARTICLE_BY_ID(article.id))}>
                  게시글 수정
                </DropdownMenu>
                <DropdownMenu $isDelete>삭제</DropdownMenu>
              </DropdownMenus>
            </Dropdown>
          )}
        </Header.Inner>
      </Header>
      <Scrollable headerHeight="0px">{children}</Scrollable>
    </>
  );
}
