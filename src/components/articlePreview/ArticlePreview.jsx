import ArticleContentWrapper from '../articlePreview/ArticleContentWrapper';
import ArticleContainer from './ArticleContainer';
import ArticleImage from '../articlePreview/ArticleImage';
import React from 'react';
import styled from 'styled-components';


const ArticleHeader = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  padding: 0 0 0;
  transition-duration: 0.2s;
`;

const ArticleSubTitle = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1em;
  font-weight: 500;
`;

const AuthorP = styled.p`
  color: #78c2ff;
  font-size: 0.8em;
  font-weight: 500;
`;

function ArticlePreview({ article }) {
  return (
    <ArticleContainer>
      <ArticleImage src={article.urlToImage} />
      <ArticleContentWrapper>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleSubTitle>{article.description}</ArticleSubTitle>
        <AuthorP>{article.author}</AuthorP>
      </ArticleContentWrapper>
    </ArticleContainer>
  );
}

export default ArticlePreview;
