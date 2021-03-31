import { device } from '../globalStyles/device';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin: 0 auto;
  transition-duration: 0.2s;

  @media ${device.extraSmallDevice} {
    margin-bottom: 60px;
    margin-top: 60px;
    max-width: 280px;
  }

  @media ${device.smallDevice} {
    margin-bottom: 65px;
    margin-top: 65px;
    max-width: 400px;
  }

  @media ${device.mediumDevice} {
    margin-bottom: 70px;
    margin-top: 70px;
    max-width: 500px;
  }

  @media ${device.largeDevice} {
    margin-bottom: 75px;
    margin-top: 75px;
    max-width: 600px;
  }

  @media ${device.extraLargeDevice} {
    margin-bottom: 80px;
    margin-top: 80px;
    max-width: 700px;
  }
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 5px;
  text-align: center;
`;

const PageSubTitle = styled.h3`
  color: #838383;
  font-size: 1em;
  font-weight: 500;
  margin: 5px 0 0;
  text-align: center;
`;

function Header(props) {
  return (
    <HeaderWrapper>
      <PageTitle>{props.headerTitle}</PageTitle>
      <PageSubTitle>{props.headerSubTitle}</PageSubTitle>
    </HeaderWrapper>
  );
}

export default Header;
