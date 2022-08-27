import React from 'react';
import Header from 'components/common/Header';
import useArticleQuery from 'hooks/useArticleQuery';
import Scrollable from 'components/common/Scrollable';
import Icon from 'components/common/Icon';
import Dropdown from 'components/common/Dropdown';
import { DropdownButton, DropdownMenus, DropdownMenu } from './ArticleLayout.styled';

interface AritcleLayoutProps {
  children?: React.ReactNode;
}

export default function ArticleLayout({ children }: AritcleLayoutProps) {
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
                <DropdownMenu>게시글 수정</DropdownMenu>
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
